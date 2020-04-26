import SnapshotRepository from './SnapshotRepository';

if (!process.env.MONGO_DB_USER || !process.env.MONGO_DB_PASSWORD || !process.env.MONGO_DB){
    throw "Please set MONGO_DB_USER and MONGO_DB_PASSWORD and MONGO_DB in env.variables";
}

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB}/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });

export async function connect() {
    let connection = await client.connect();
    let db = connection.db("lockdown");
    return {
        snapshotRepository: new SnapshotRepository(db)
    }
}

