import getDocument, { getWorksheetByTitle } from './googlesheet';
import { transposeRows, transposeColumns } from '../../utils/dataHelper';
import { letterToColumn, columnToLetter } from 'google-spreadsheet/lib/utils';
import logger from '../../utils/logger';
import { writeJSON } from '../../utils/file';
import { SimpleGrid } from '../../utils/SimpleGrid';
import moment from '../../utils/moment';
import { ENTRY_COLUMN_LENGTH, parseEntry } from './parsers/lockdownParser';
import { getSnapshots, MEASURES } from './snapshot/processor';

// Number of territories to query through batchGet at a time
const BATCH_SIZE = 25;

// Number of entries to batchGet from google sheet
const ENTRIES_TO_FETCH = 100;

/**
 * Gets data from "Global" sheet.
 * @returns {array}
 */
export async function getGlobalData() {
  const sheet = await getWorksheetByTitle('Global');
  const rows = await sheet.getCellsInRange('B5:F253');
  const headers = ['status', 'jump', 'territory', 'iso2', 'iso3'];
  return transposeRows(headers, rows);
}

/**
 * Groups territories and request data from google API at batch size
 * @param {array} territories 
 */
export async function batchGetTerritoriesEntryData(territories) {

  const doc = await getDocument();
  const startCacheColumn = 'H';
  const startCacheColumnIndex = letterToColumn(startCacheColumn);
  const endCacheColumn = columnToLetter(startCacheColumnIndex + (ENTRIES_TO_FETCH * ENTRY_COLUMN_LENGTH));
  const rangeToCache = `${startCacheColumn}1:${endCacheColumn}65`;
  const result = [];
  var batch;

  while (batch = territories.splice(0, BATCH_SIZE)) {
    if (batch.length < 1) break;
    // TODO: Uncomment the following when country tab sheets are ready with ISO3 naming
    let gridRanges = batch.map(territory => `${territory['iso3']}!${rangeToCache}`);
    logger.log(`[Lockdown:WorkSheet] ${batch.map(t => t['iso3']).join(' ')}`);
    let gridData = await doc.batchGetGridRanges(gridRanges);

    for (let i = 0; i < batch.length; i++) {
      // TODO: Uncomment the following when country tab sheets are ready with ISO3 naming
      let workSheet = await getWorksheetByTitle(`${batch[i]['iso3']}`);
      let rowCount = workSheet['gridProperties']['rowCount'];
      let columnCount = workSheet['gridProperties']['columnCount'];

      let gridSheet = new SimpleGrid(rangeToCache, gridData[i], rowCount, columnCount);
      let entries = [];

      // How many entries should we loop through according to columns available on sheet
      let entryCount = Math.ceil((columnCount - startCacheColumnIndex) / ENTRY_COLUMN_LENGTH);
      for (let entryIndex = 0; entryIndex < entryCount; entryIndex++) {
        // Cell ranges
        let entryData = parseEntry(gridSheet, entryIndex);
        if (entryData) {
          entries.push(entryData);
        }
      }

      let snapshots = getSnapshots(entries);

      result.push({
        iso2: batch[i]['iso2'],
        iso3: batch[i]['iso3'],
        name: batch[i]['territory'],
        lockdown: {
          // TODO: change this to support multiple entries after MVP
          // TODO: changes needed for time slider
          snapshots
          // ...currentEntry
        }
      });
    }
  }

  return result;
}

/**
 * Gets lockdown data for all territories
 * @returns {array}
 */
export async function getTerritoriesLockdownData() {
  const territories = await getGlobalData();
  return await batchGetTerritoriesEntryData(territories);
}

export default async function loadData() {
  const territories = await getTerritoriesLockdownData();

  var startDate = moment().add(-2, "weeks");
  var endDate = moment().add(8, 'weeks');

  const summarizedLockdowns = {};
  const territoriesSummary = {};

  for (let currentDate of moment.range(startDate, endDate).by('days')) {
    let formattedDate = currentDate.format("YYYY-MM-DD");
    let currentDateLockdown = summarizedLockdowns[formattedDate] = [];
    
    territories.forEach(territory => {

      currentDateLockdown.push(generateLockdownStatus(territory, currentDate));

      let territorySummary = territoriesSummary[territory.iso2];
      if (!territorySummary) {
        territorySummary = territoriesSummary[territory.iso2] = {};
      }

      territorySummary[formattedDate] = generateMeasures(territory, currentDate);
    });
    writeJSON(`countryLockdowns/${formattedDate}`, currentDateLockdown);
  }
  writeJSON('lockdown', summarizedLockdowns);

  Object.keys(territoriesSummary).forEach(key => {
    writeJSON(`territories/${key}`, territoriesSummary[key]);
  });

  return {
    lockdownTerritories: territories,
    lockdownStatusByTerritory: summarizedLockdowns
  };
}

function generateLockdownStatus(territory, currentDate) {
  let snapshots = territory
    .lockdown?.snapshots?.find(s => moment(s.start_date).isBefore(currentDate) && moment(s.end_date).isAfter(currentDate)
      && s.measures.find(m => m.label == "measure.lockdown_status"));
  let measure = snapshots?.measures?.find(m => m.label == "measure.lockdown_status");
  return {
    ISO: territory.iso2,
    lockdown_status: measure?.value || null,
    name: territory.name
  };
}

function generateMeasures(territory, currentDate){
  let snapshots = territory
    .lockdown?.snapshots?.filter(s => moment(s.start_date).isBefore(currentDate) && moment(s.end_date).isAfter(currentDate));

    let entry = {};
    entry.travel = {
        land: [],
        flight: [],
        sea: []
    }
    entry.measures = [];

    var allMeasures = snapshots.map(r => r.measures);
    mergeDatapoints(entry.measures, allMeasures, "max_gathering");
    mergeDatapoints(entry.measures, allMeasures, "measure");
    mergeDatapoints(entry.travel.land, allMeasures, "land");
    mergeDatapoints(entry.travel.flight, allMeasures, "flight");
    mergeDatapoints(entry.travel.sea, allMeasures, "sea");

    let result = {};
    result.lockdown = entry;

    return result;
}

function mergeDatapoints(result, containers, prefix) {
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

      result.push({ label: keys[1] || measureKey, value: measureValue });
  });
}