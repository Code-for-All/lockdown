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
    const humanizeDuration = require('humanize-duration')

    currentData.forEach(element => {
        var founded = snapshotData
            .filter(e => e.unique_id == element.unique_id);
        if (founded.length == 0) {
            result[element.iso3] = {};
            element.measures.forEach(m => result[element.iso3][m.label] = {})
        }
    });

    const report = [];

    const snapshot = snapshotData[0] || { snapshot_date: new Date('2019-11-01') };
    var humanDuration = humanizeDuration(currentDate - snapshot.snapshot_date);

    report.push(`# Changes for the last: ${humanDuration}`);
    const StringBuilder = require("string-builder");

    let total = 0;
    let sb = new StringBuilder();
    Object.keys(result).forEach(countryKey => {
        const country = result[countryKey];

        sb.append(`* ${countryKey}: `);
        Object.keys(country).forEach(key => {
            sb.append(`\`${key}\`, `);
        });
        if (total % 5 == 0) {
            report.push(sb.toString());
            sb = new StringBuilder();
        } else {
            sb.appendLine();
        }

        total++;
    });

    return { data: result, report: report };
}

module.exports = async function (context, req) {
    const db = await connect();
    const snapshots = db.collection("snapshots");
    const snapshotsCopy = db.collection("snapshots_copy");

    const snapshotsRecords = await snapshotsCopy.find().toArray();
    const allRecords = await snapshots.find().toArray();

    const result = compare(allRecords, snapshotsRecords);
    const snapshot = snapshotsRecords[0] || { snapshot_date: new Date('2019-11-01') };

    let report = result.report;
    if (Object.keys(result.data).length == 0) {
        const humanizeDuration = require('humanize-duration');
        var humanDuration = humanizeDuration(new Date() - snapshot.snapshot_date);
        report = [`> No Changes for the last: ${humanDuration}`];
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            "blocks": report.map(r => {
                return {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": r
                    }
                }
            })
        },
        headers: {
            'Content-Type': 'application/json'
        }
    };
};