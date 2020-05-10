import SnapshotRepository from "./SnapshotRepository";
import { CovidRepository } from "./CovidRepository";

export default class Database {
    constructor(connection) {
        /** @private */
        this._connection = connection;
        this._db = connection.db("lockdown");

        /**@type {SnapshotRepository} */
        this.snapshotRepository = new SnapshotRepository(this._db);
        /**@type {CovidRepository} */
        this.covidRepository = new CovidRepository(this._db);
    }

    close(){
        this._connection.close();
    }
}