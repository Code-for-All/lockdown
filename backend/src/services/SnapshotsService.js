import { connect } from "../repositories";
import Database from "../repositories/Database";
import Entry from "../types/Entry";
import Measure from "../types/Measure";
import Snapshot from "../types/Snapshot";
import Travel from "../types/Travel";

export default class SnapshotsService{
    /**
     * 
     * @param {Database} database 
     */
    constructor(database){
        this.database = database;
    }

    /**
     * @async
     * @param {string} iso3 
     * @param {Date} date 
     * @returns {Snapshot}
     */
    async getSnapshot(iso3, date){
        let ranges = await this.database.snapshotRepository
            .getByTerritoryAndDate(iso3, date)
            .toArray();
        
        let entry = new Entry();
        entry.measure = new Measure();
        entry.land = new Travel();
        entry.flight = new Travel();
        entry.sea = new Travel();
        
        this.mergeDatapoints(entry.measure, ranges.map(r => r.measures));
        this.mergeDatapoints(entry.land, ranges.map(r => r.travel.land));
        this.mergeDatapoints(entry.flight, ranges.map(r => r.travel.flight));
        this.mergeDatapoints(entry.sea, ranges.map(r => r.travel.sea));

        let result = new Snapshot();
        result.entry = entry;

        return result;
    }

    /**
     * 
     * @param {Entry} result 
     * @param {Object[]} containers 
     */
    mergeDatapoints(result, containers){
        containers.forEach(container => {
            if(container){
                container.forEach(el => {
                    if(el.value){
                        result[el.label] = el.value
                    }
                })
                // Object.keys(container).forEach(key => {
                //     let dataPoint = container[key];
                //     if(dataPoint.value){
                //         result[key] = dataPoint;
                //     }
                // })
            }
        });
    }
}