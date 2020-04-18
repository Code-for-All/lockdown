import getDocument, { getWorksheetByTitle } from './googlesheet';
import { transposeRows, transposeColumns } from '../../utils/dataHelper';
import { letterToColumn, columnToLetter } from 'google-spreadsheet/lib/utils';
import logger from '../../utils/logger';
import { writeJSON } from '../../utils/file';
import find from 'lodash/find';
import { SimpleGrid } from '../../utils/SimpleGrid';
import moment from '../../utils/moment';
import { ENTRY_COLUMN_LENGTH, parseEntry } from './parsers/lockdownParser';
import { getSnapshots } from './snapshot/processor';
import { GLOBAL_COUNTRY_STATUS } from '../../../../shared/types';

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
      let entryCount = Math.ceil((columnCount - startCacheColumnIndex)/ENTRY_COLUMN_LENGTH);
      for (let entryIndex = 0; entryIndex < entryCount; entryIndex++) {
        // Cell ranges
        let entryData = parseEntry(gridSheet, entryIndex);
        if (entryData) {
          entries.push(entryData);
        }
      }

      // TODO: change this to support multiple entries after MVP 
      // Compares current date in the same format with entry to get latest
      // TODO: changes needed for time slider
      let currentDate = moment();
      let currentDatePlusOne = moment().add(1, 'days');
      let snapshots = getSnapshots(entries, currentDate, currentDatePlusOne);
      let currentSnapshot = snapshots[0];


      result.push({
        isoCode: batch[i]['iso2'],
        lockdown: {
          // TODO: change this to support multiple entries after MVP
          // TODO: changes needed for time slider
          ...currentSnapshot
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

  // Loads separate json files per territory iso code
  territories.forEach((territory) => {
    writeJSON(`territories/${territory['isoCode']}`, {
      lockdown: territory['lockdown']
    });
  });

  // Load summarized datafile
  // TODO: changes needed for time slider
  const summarizedTerritories = {};
  territories.forEach((territory) => {
    let measures = territory['lockdown']['measures'];
    let lockdownStatus = find(measures, { 'label': 'lockdown_status' });
    summarizedTerritories[territory['isoCode']] = {
      lockdown: {
        lockdown_status: lockdownStatus['value'],
      }
    };
  });

  return {
    lockdownTerritories: territories,
    lockdownStatusByTerritory: summarizedTerritories
  };
}