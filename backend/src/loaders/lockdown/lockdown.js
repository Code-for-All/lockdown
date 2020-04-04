import getDocument, { getWorksheetByTitle } from './googlesheet';
import GoogleSpreadsheetWorksheet from 'google-spreadsheet/lib/GoogleSpreadsheetWorksheet';
import { transposeRows, transposeColumns } from '../../utils/dataHelper';
import { letterToColumn, columnToLetter } from 'google-spreadsheet/lib/utils';
import logger from '../../utils/logger';
import { writeJSON } from '../../utils/file';
import { getCachedCellsRange } from '../../utils/sheet';
import find from 'lodash/find';
import { SimpleGrid } from '../../utils/SimpleGrid';
import { toMeasureType, toTravelType, toInteger, isUpdateReady, toEntryDate, toCountryStatus } from '../../utils/typeHelper';
import moment from 'moment-timezone';
import { TRAVEL } from '../../../../shared/types';

/**
 * Gets data from "Global" sheet.
 * Expected structure from gsheet as such:
 * [ 
 *    [ 'Afghanistan', 'AF', 'AFG' ],
 *    [ 'Albania', 'AL', 'ALB' ],
 *    [ 'Algeria', 'DZ', 'DZA' ],
 * ...
 * @returns {array}
 */
export async function getGlobalData() {
  // TODO: Implement sheet readiness from status in Global tab
  logger.log('[Lockdown:Global] start');
  const sheet = await getWorksheetByTitle('Global');
  const rows = await sheet.getCellsInRange('D5:F253');
  const headers = ['territory', 'iso2', 'iso3'];
  return transposeRows(headers, rows);
}

/**
 * Parses entry structure with appended label,
 * transforms values
 * @param {array} rows 
 * @param {any} labelsWithTransformFn 
 */
function parseEntryStructure(rows, labelsWithTransformFn) {
  const result = [];
  for (var i = 0; i < rows.length; i++) {
    const row = rows[i];
    const value = row[0];
    const labelWithTransformFn = labelsWithTransformFn[i];
    const transformFn = labelWithTransformFn['transformFn'];
    const transformedValue = transformFn(value);

    result.push({
      label: labelWithTransformFn['label'],
      value: transformedValue != undefined ? transformedValue : null,
    });
  }
  return result;
}

/**
 * Converts to A1 address from entry index
 * @param {number} rowIndex Row index
 * @param {number} entryIndex N-th index for entry
 * @param {string} firstEntryColumn The first entry in sheet
 */
function getEntryCell(rowIndex, entryIndex = 0, firstEntryColumn = 'D') {
  const firstEntryColumnIndex = letterToColumn(firstEntryColumn);
  const columnIndex = firstEntryColumnIndex + entryIndex;
  const letter = columnToLetter(columnIndex);
  return `${letter}${rowIndex}`;
}

/**
 * Converts row range to A1 range according to entry structure
 * '2:10' will get 'D2:J10', etc.
 * @param {string} rowRange Row range, such as '2:10'
 * @param {number} entryIndex N-th index for entry
 * @param {string} firstEntryColumn The first entry in sheet
 */
function getEntryCellRange(rowRange, entryIndex = 0, firstEntryColumn = 'D') {
  const firstEntryColumnIndex = letterToColumn(firstEntryColumn);
  const columnIndex = firstEntryColumnIndex + entryIndex;
  const letter = columnToLetter(columnIndex);

  const [rowStart, rowEnd] = rowRange.split(':');
  return `${letter}${rowStart}:${letter}${rowEnd}`;
}

/**
 * Gets travel type with default to NA
 * @param {string} value 
 */
function toTravelTypeWithDefault(value) {
  return toTravelType(value) ?? TRAVEL.NA;
}

/**
 * Gets fully parsed entry data
 * @param {GoogleSpreadsheetWorksheet|SimpleGrid} sheet 
 * @param {integer} entryIndex 
 */
function getEntry(sheet, entryIndex) {
  // Entry meta section
  const entryMetaRows = getCachedCellsRange(sheet, getEntryCellRange('3:9', entryIndex), false);
  const entryMetaData = transposeColumns(['editor', 'reviewed_by', 'status', 'type', 'date_of_entry', 'additional_info_1', 'additional_info_2'], entryMetaRows, true);

  // Entry date
  const entryDateRows = getCachedCellsRange(sheet, getEntryCellRange('1:1', entryIndex), false);
  const entryDateData = { entry_date: toEntryDate(entryDateRows[0]) };
  
  // Entry entry section
  const entryInfoRows = getCachedCellsRange(sheet, getEntryCellRange('16:16', entryIndex), false);
  const entryInfoData = { title_of_status: entryInfoRows[0][0] };

  // Max gathering
  const entryMaxGatheringRows = getCachedCellsRange(sheet, getEntryCellRange('19:19', entryIndex), false);
  const entryMaxGatheringData = { max_gathering: toInteger(entryMaxGatheringRows[0][0]) }; // Max gathering number allowed (PAX)?

  // Measures section
  const entryMeasureRange = getEntryCellRange('20:29', entryIndex);
  const measures = parseEntryStructure(getCachedCellsRange(sheet, entryMeasureRange, false), [
    { label: 'lockdown_status', transformFn: toMeasureType }, // Are citizens allowed to leave their homes?
    { label: 'city_movement_restriction', transformFn: toMeasureType }, // Is going on the street allowed?
    { label: 'attending_religious_sites', transformFn: toMeasureType }, // Is attenting religiouns sites allowed?
    { label: 'going_to_work', transformFn: toMeasureType }, // Is going to work allowed?
    { label: 'military_not_deployed', transformFn: toMeasureType }, // Is the Military NOT deployed?
    { label: 'academia_allowed', transformFn: toMeasureType }, // Is going to academia allowed?
    { label: 'going_to_shops', transformFn: toMeasureType }, // Is going to shops allowed?
    { label: 'electricity_nominal', transformFn: toMeasureType }, // Is Electricity operating nominally?
    { label: 'water_nominal', transformFn: toMeasureType }, // Is Water operating nominally?
    { label: 'internet_nominal', transformFn: toMeasureType }, // Is Internet operating nominally?
  ]);

  // In & out section
  const entryLandRange = getEntryCellRange('37:42', entryIndex);
  const land = parseEntryStructure(getCachedCellsRange(sheet, entryLandRange, false), [
    { label: 'local', transformFn: toTravelTypeWithDefault }, // Local destinations?
    { label: 'nationals_inbound', transformFn: toTravelTypeWithDefault }, // Nationals inbound?
    { label: 'nationals_outbound', transformFn: toTravelTypeWithDefault }, // Nationals outbound?
    { label: 'foreigners_inbound', transformFn: toTravelTypeWithDefault }, // Foreigners inbound?
    { label: 'foreigners_outbound', transformFn: toTravelTypeWithDefault }, // Foreigners outbound?
    { label: 'cross_border_workers', transformFn: toTravelTypeWithDefault }, // Cross border workers?
  ]);

  land.push(...[
    { label: 'stopovers', value: TRAVEL.NA },
    { label: 'commerce', value: toTravelTypeWithDefault(sheet.getCellByA1(getEntryCell(43, entryIndex))) }, // Commerce?
  ]);

  const entryFlightRange = getEntryCellRange('47:51', entryIndex);
  const flight = parseEntryStructure(getCachedCellsRange(sheet, entryFlightRange, false), [
    { label: 'local', transformFn: toTravelTypeWithDefault }, // Local destinations?
    { label: 'nationals_inbound', transformFn: toTravelTypeWithDefault }, // Nationals inbound?
    { label: 'nationals_outbound', transformFn: toTravelTypeWithDefault }, // Nationals outbound?
    { label: 'foreigners_inbound', transformFn: toTravelTypeWithDefault }, // Foreigners inbound?
    { label: 'foreigners_outbound', transformFn: toTravelTypeWithDefault }, // Foreigners outbound?
  ]);

  flight.push(...[
    { label: 'cross_border_workers', value: TRAVEL.NA },
    { label: 'stopovers', value: TRAVEL.NA }, // Stopovers?
    { label: 'commerce', value: toTravelTypeWithDefault(sheet.getCellByA1(getEntryCell(53, entryIndex))) }, // Commerce?
  ]);

  const entrySeaRange = getEntryCellRange('57:62', entryIndex);
  const sea = parseEntryStructure(getCachedCellsRange(sheet, entrySeaRange, false), [
    { label: 'local', transformFn: toTravelTypeWithDefault }, // Local destinations?
    { label: 'nationals_inbound', transformFn: toTravelTypeWithDefault }, // Nationals inbound?
    { label: 'nationals_outbound', transformFn: toTravelTypeWithDefault }, // Nationals outbound?
    { label: 'foreigners_inbound', transformFn: toTravelTypeWithDefault }, // Foreigners inbound?
    { label: 'foreigners_outbound', transformFn: toTravelTypeWithDefault }, // Foreigners outbound?
    { label: 'cross_border_workers', transformFn: toTravelTypeWithDefault }, // Cross border workers?
  ]);

  sea.push(...[
    { label: 'stopovers', value: TRAVEL.NA },
    { label: 'commerce', value: toTravelTypeWithDefault(sheet.getCellByA1(getEntryCell(63, entryIndex))) }, // Commerce?
  ]);

  // TODO: Implement optional & required validation here.
  
  return {
    ...entryMetaData,
    ...entryInfoData,
    ...entryDateData,
    ...entryMaxGatheringData,
    measures: measures,
    travel: {
      land,
      flight,
      sea,
    }
  }
}

/**
 * Groups territories and request data from google API at batch size
 * @param {array} territories 
 */
export async function batchGetTerritoriesEntryData(territories) {
  const batchSize = 25;
  const doc = await getDocument();
  // TODO: Figure out how to find total columns should take
  const entriesToGrab = 1000;
  const startColumnIndex = letterToColumn('D');
  const endCacheColumn = columnToLetter(startColumnIndex + entriesToGrab);
  const rangeToCache = `D1:${endCacheColumn}65`;
  const result = [];
  var batch;
  
  while (batch = territories.splice(0, batchSize)) {
    if (batch.length < 1) break;
    // TODO: Uncomment the following when country tab sheets are ready with ISO3 naming
    // let gridRanges = batch.map(territory => `${territory['iso3']}_Fetch!${rangeToCache}`);
    let gridRanges = batch.map(territory => `ASM_Fetch!${rangeToCache}`);
    logger.log(`[Lockdown:WorkSheet] ${batch.map(t => t['iso3']).join(' ')}`);
    let gridData = await doc.batchGetGridRanges(gridRanges);
    
    for (let i = 0; i < batch.length; i++) {
      // TODO: Uncomment the following when country tab sheets are ready with ISO3 naming
      // let workSheet = await getWorksheetByTitle(`${batch[i]['iso3']}_Fetch`);
      let workSheet = await getWorksheetByTitle('ASM_Fetch');
      let rowCount = workSheet['gridProperties']['rowCount'];
      let columnCount = workSheet['gridProperties']['columnCount'];

      let gridSheet = new SimpleGrid(rangeToCache, gridData[i], rowCount, columnCount);
      let entries = [];
      let entryColumnsCount = columnCount - startColumnIndex;
      for (let entryIndex = 0; entryIndex < entryColumnsCount; entryIndex++) {
        // Cell ranges
        let entryData = getEntry(gridSheet, entryIndex);
        if (entryData) {
          entries.push(entryData);
        }
      }

      // Compares current date in the same format with entry to get latest
      let currentDate = moment().tz('UTC').format('D MMMM Y');
      let currentEntry = find(entries, { entry_date: currentDate });

      result.push({
        isoCode: batch[i]['iso2'],
        lockdown: {
          // TODO: change this to support multiple entries after MVP
          // entries
          ...currentEntry
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