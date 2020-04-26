import { connect } from "../repositories";
import Database from "../repositories/Database";
import Entry from "../types/Entry";
import Measure from "../types/Measure";
import Snapshot from "../types/Snapshot";
import Travel from "../types/Travel";

export const MEASURES = [
    'measure.lockdown_status',
    'measure.city_movement_restriction',
    'measure.attending_religious_sites',
    'measure.going_to_work',
    'measure.military_not_deployed',
    'measure.academia_allowed',
    'measure.going_to_shops',
    'measure.electricity_nominal',
    'measure.water_nominal',
    'measure.internet_nominal',
    'land.local',
    'land.nationals_inbound',
    'land.nationals_outbound',
    'land.foreigners_inbound',
    'land.foreigners_outbound',
    'land.cross_border_workers',
    'land.commerce',
    'land.stopovers',
    'flight.local',
    'flight.nationals_inbound',
    'flight.nationals_outbound',
    'flight.foreigners_inbound',
    'flight.foreigners_outbound',
    'flight.cross_border_workers',
    'flight.commerce',
    'flight.stopovers',
    'sea.local',
    'sea.nationals_inbound',
    'sea.nationals_outbound',
    'sea.foreigners_inbound',
    'sea.foreigners_outbound',
    'sea.cross_border_workers',
    'sea.commerce',
    'sea.stopovers'
];

export default class SnapshotsService {
    /**
     * 
     * @param {Database} database 
     */
    constructor(database) {
        this.database = database;
    }

    /**
     * @async
     * @param {string} iso3 
     * @param {Date} date 
     * @returns {Snapshot}
     */
    async getSnapshot(iso, date) {
        let ranges = await this.database.snapshotRepository
            .getByTerritoryAndDate(iso, date)
            .toArray();

        let entry = {};
        entry.travel = {
            land: [],
            flight: [],
            sea: []
        }
        entry.measures = [];

        var allMeasures = ranges.map(r => r.measures);
        this.mergeDatapoints(entry.measures, allMeasures, "measure");
        this.mergeDatapoints(entry.travel.land, allMeasures, "land");
        this.mergeDatapoints(entry.travel.flight, allMeasures, "flight");
        this.mergeDatapoints(entry.travel.sea, allMeasures, "sea");

        let result = {};
        result.lockdown = entry;

        return result;
    }

    /**
     * 
     * @param {Entry} result 
     * @param {Object[]} containers 
     */
    mergeDatapoints(result, containers, prefix) {
        MEASURES.filter(m => m.startsWith(prefix)).forEach(measureKey => {
            
            let measureValue = null;
            containers.forEach(container => {
                let element = container.find(el => el.label == measureKey);
                if(element){
                    measureValue = element.value;
                    return;
                }
            });

            let keys = measureKey.split('.');

            result.push({ label: keys[1], value: measureValue });
        });
    }
}