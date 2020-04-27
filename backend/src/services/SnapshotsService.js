import { connect } from "../repositories";
import Database from "../repositories/Database";
import Entry from "../types/Entry";
import Measure from "../types/Measure";
import Snapshot from "../types/Snapshot";
import Travel from "../types/Travel";

export const MEASURES = [
    'max_gathering',
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

        let entry = {iso: iso};
        entry.measures = [];

        var allMeasures = ranges.map(r => {
            return {measures: r.measures, range: r};
        });
        entry.max_gathering = this.buildResult(this.getValueFromContainers(allMeasures, "max_gathering"), "max_gathering");
        this.mergeDatapoints(entry.measures, allMeasures, "measure");
        this.mergeDatapoints(entry.measures, allMeasures, "land");
        this.mergeDatapoints(entry.measures, allMeasures, "flight");
        this.mergeDatapoints(entry.measures, allMeasures, "sea");

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
            let measureValue = this.getValueFromContainers(containers, measureKey);

            result.push(this.buildResult(measureValue, measureKey));
        });
    }

    buildResult(measureValue, measureKey){
        let keys = measureKey.split('.');
        return { 
            label: keys[1] || measureKey, 
            value: measureValue.value,  
            name: measureKey,
            [`#npi+num+${measureKey.replace('.', "+").replace('_','+')}`]: measureValue.value,
            '#date+start': measureValue.range?.start_date,
            '#date+end': measureValue.range?.end_date,
            '#meta+url': measureValue.range?.source_url,
            '#country+code+iso3': measureValue.range?.iso3
        }
    }

    getValueFromContainers(containers, key){
        let result = {value: null, range: null};
        containers.forEach(container => {
            let element = container.measures.find(el => el.label == key);
            if(element){
                result = {range: container.range, value: element.value};
                return;
            }
        });
        return result;
    }
}