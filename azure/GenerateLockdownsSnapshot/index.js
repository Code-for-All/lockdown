async function connect() {
    const MongoClient = require('mongodb').MongoClient;
    const uri = `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB}`;
    const client = new MongoClient(uri, { useNewUrlParser: true });
    const connection = await client.connect();
    return connection.db("lockdown");
}

function compare(currentData, snapshotData) {
    const result = {};
    const currentDate = new Date();
    currentData.forEach(element => {
        element.snapshot_date = currentDate;
        var founded = snapshotData
            .filter(e => e.unique_id == element.unique_id);
        if (founded.length == 0) {
            result[element.iso3] = {};
            element.measures.forEach(m => result[element.iso3][m.label] = {})
        }
    });

    const StringBuilder = require("string-builder");
    let sb = new StringBuilder();

    sb.appendLine(`Report generated: ${new Date()}`)

    Object.keys(result).forEach(countryKey => {
        const country = result[countryKey];

        sb.appendLine(`${countryKey}: `);
        Object.keys(country).forEach(key => {
            sb.append(`${key}, `);
        });
    });

    return { data: result, report: sb.toString() };
}

module.exports = async function (context, myTimer, updateSnapshotInput) {
    const appInsights = require("applicationinsights");
    appInsights.setup(process.env.APP_INSIGHTS);
    appInsights.start();

    const db = await connect();
    const snapshots = db.collection("snapshots");
    const snapshotsCopy = db.collection("snapshots_copy");

    const snapshotsRecords = await snapshotsCopy.find().toArray();
    const allRecords = await snapshots.find().toArray();

    const result = compare(allRecords, snapshotsRecords);

    await snapshotsCopy.remove();
    await snapshotsCopy.insertMany(allRecords);

    if (Object.keys(result.data).length > 0) {
        return { reportOutput: result.report }
    }

    return {};
};