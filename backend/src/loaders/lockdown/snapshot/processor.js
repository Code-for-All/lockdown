import Moment, { MomentRange } from '../../../utils/moment';
import { extendMoment } from 'moment-range';
import { isEntryActive } from '../../../utils/typeHelper';
import Entry from '../types/Entry';
import get from 'lodash/get';

const moment = extendMoment(Moment);

export const GLOBAL_FIRST_DATE = moment('01-11-2019', 'DD-MM-YYYY');
export const GLOBAL_LAST_DATE = moment('30-04-2022', 'DD-MM-YYYY');

/**
 * Gets snapshots in range
 * TODO: Handle case where entry start/end dates are more than globals?
 * @param {Entry[]} entries
 * @param {MomentRange} startDate
 * @param {MomentRange} endDate
 */
export function getSnapshots(entries, startDate, endDate) {
  // Filter to only "Active" sheets
  const activeEntries = entries.filter(entry => isEntryActive(entry.status));

  // Sort according to date of issuance (latest first)
  activeEntries.sort((a, b) => b.source_date_of_issuance.unix() - a.source_date_of_issuance.unix())

  // Loop start until end dates
  const snapshots = [];
  for (let currentDate of moment.range(startDate, endDate).by('days')) {
    snapshots.push(getSnapshotForDate(activeEntries, currentDate));
  }

  return snapshots;
}

/**
 * Populates snapshot object
 * @param {Entry[]} entries 
 * @param {MomentRange} date 
 */
function getSnapshotForDate(entries, date) {
  let snapshot = {};
  snapshot.date = date.format('DD MMMM YYYY');
  
  // TODO: remove if not required
  // snapshot.entry_uid = getDataPointValue(entries, date, 'entry_uid');
  // snapshot.issue_id = getDataPointValue(entries, date, 'issue_id');
  // snapshot.status = getDataPointValue(entries, date, 'status');
  // snapshot.source_start_date = getDataPointValue(entries, date, 'source_start_date');
  // snapshot.source_end_date = getDataPointValue(entries, date, 'source_end_date');
  // snapshot.source_name = getDataPointValue(entries, date, 'source_name');
  // snapshot.source_url = getDataPointValue(entries, date, 'source_url');
  snapshot.entry_timestamp = getDataPointValue(entries, date, 'timestamp');
  snapshot.type = getDataPointValue(entries, date, 'type');
  snapshot.title_of_status = getDataPointValue(entries, date, 'source_title_of_status');
  snapshot.date_of_issuance = getDataPointValue(entries, date, 'source_date_of_issuance');
  snapshot.max_gathering = getDataPointValue(entries, date, 'max_gathering');

  snapshot.measures = [];
  snapshot.measures.push(getDataPointValueWithLabel(entries, date, 'measure.lockdown_status'));
  snapshot.measures.push(getDataPointValueWithLabel(entries, date, 'measure.city_movement_restriction'));
  snapshot.measures.push(getDataPointValueWithLabel(entries, date, 'measure.attending_religious_sites'));
  snapshot.measures.push(getDataPointValueWithLabel(entries, date, 'measure.going_to_work'));
  snapshot.measures.push(getDataPointValueWithLabel(entries, date, 'measure.military_not_deployed'));
  snapshot.measures.push(getDataPointValueWithLabel(entries, date, 'measure.academia_allowed'));
  snapshot.measures.push(getDataPointValueWithLabel(entries, date, 'measure.going_to_shops'));
  snapshot.measures.push(getDataPointValueWithLabel(entries, date, 'measure.electricity_nominal'));
  snapshot.measures.push(getDataPointValueWithLabel(entries, date, 'measure.water_nominal'));
  snapshot.measures.push(getDataPointValueWithLabel(entries, date, 'measure.internet_nominal'));

  snapshot.travel = {};
  snapshot.travel.land = [];
  snapshot.travel.land.push(getDataPointValueWithLabel(entries, date, 'land.local'));
  snapshot.travel.land.push(getDataPointValueWithLabel(entries, date, 'land.nationals_inbound'));
  snapshot.travel.land.push(getDataPointValueWithLabel(entries, date, 'land.nationals_outbound'));
  snapshot.travel.land.push(getDataPointValueWithLabel(entries, date, 'land.foreigners_inbound'));
  snapshot.travel.land.push(getDataPointValueWithLabel(entries, date, 'land.foreigners_outbound'));
  snapshot.travel.land.push(getDataPointValueWithLabel(entries, date, 'land.cross_border_workers'));
  snapshot.travel.land.push(getDataPointValueWithLabel(entries, date, 'land.commerce'));
  snapshot.travel.land.push(getDataPointValueWithLabel(entries, date, 'land.stopovers'));
  
  snapshot.travel.flight = [];
  snapshot.travel.flight.push(getDataPointValueWithLabel(entries, date, 'flight.local'));
  snapshot.travel.flight.push(getDataPointValueWithLabel(entries, date, 'flight.nationals_inbound'));
  snapshot.travel.flight.push(getDataPointValueWithLabel(entries, date, 'flight.nationals_outbound'));
  snapshot.travel.flight.push(getDataPointValueWithLabel(entries, date, 'flight.foreigners_inbound'));
  snapshot.travel.flight.push(getDataPointValueWithLabel(entries, date, 'flight.foreigners_outbound'));
  snapshot.travel.flight.push(getDataPointValueWithLabel(entries, date, 'flight.cross_border_workers'));
  snapshot.travel.flight.push(getDataPointValueWithLabel(entries, date, 'flight.commerce'));
  snapshot.travel.flight.push(getDataPointValueWithLabel(entries, date, 'flight.stopovers'));
  
  snapshot.travel.sea = [];
  snapshot.travel.sea.push(getDataPointValueWithLabel(entries, date, 'sea.local'));
  snapshot.travel.sea.push(getDataPointValueWithLabel(entries, date, 'sea.nationals_inbound'));
  snapshot.travel.sea.push(getDataPointValueWithLabel(entries, date, 'sea.nationals_outbound'));
  snapshot.travel.sea.push(getDataPointValueWithLabel(entries, date, 'sea.foreigners_inbound'));
  snapshot.travel.sea.push(getDataPointValueWithLabel(entries, date, 'sea.foreigners_outbound'));
  snapshot.travel.sea.push(getDataPointValueWithLabel(entries, date, 'sea.cross_border_workers'));
  snapshot.travel.sea.push(getDataPointValueWithLabel(entries, date, 'sea.commerce'));
  snapshot.travel.sea.push(getDataPointValueWithLabel(entries, date, 'sea.stopovers'));

  return snapshot;
}

/**
 * Wrapper to get structure with label and default value to null
 * @param {Entry[]} entries
 * @param {MomentRange} date
 * @param {string} key
 */
function getDataPointValueWithLabel(entries, date, key) {
  // Get last keys as label if dot notation
  const label = key.indexOf('.') == -1 ? key : key.split('.').pop();
  return {
    label: label,
    value: getDataPointValue(entries, date, key) ?? null,
  };
}

/**
 * Loops through all entries until a determined value is found
 * @param {Entry[]} entries
 * @param {MomentRange} date
 * @param {string} key
 */
function getDataPointValue(entries, date, key) {
  var value;
  for (var entry of entries) {
    // Entry dates with default to global
    const entryStartDate = entry.source_start_date ?? GLOBAL_FIRST_DATE;
    const entryEndDate = entry.source_end_date ?? GLOBAL_LAST_DATE;

    const dataPoint = get(entry, key);
    
    // No value defined, skip this entry
    // TODO: Or should it break and let the value as undefined?
    // Current behaviour is it will find entries beneath
    if (dataPoint == undefined || (typeof dataPoint == 'object' && dataPoint.value == undefined)) {
      continue;
    }

    // Datapoint dates with default to entry
    const dataPointStartDate = dataPoint?.start_date ?? entryStartDate;
    const dataPointEndDate = dataPoint?.end_date ?? entryEndDate;

    // If date is within range, return that value
    const range = moment.range(dataPointStartDate, dataPointEndDate);
    if (date.within(range)) {
      value = dataPoint.value || dataPoint;
      break;
    }
  }
  return value;
}