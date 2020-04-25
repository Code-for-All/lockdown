import Entry from "../types/Entry";

export default class SnapshotRepository{
    constructor(db){
        this.model = db.collection("snapshots");
    }

    /**
     * @param {string} iso3 
     * @param {Date} date 
     * @returns {Promise<Array<Entry>>}
     */
    getByTerritoryAndDate(iso3, date){
        return this.model.find({
            iso3: iso3,
            start_date: {$lte: date},
            end_date: {$gte: date}
        });
    }

    /**
     * 
     * @param {*} snaphot 
     */
    insert(snaphot){
        return this.model.insert(snaphot);
    }

    /**
     * 
     * @param {[]} snaphot 
     */
    insertAll(snaphots){
        return this.model.insertMany(snaphots);
    }
}