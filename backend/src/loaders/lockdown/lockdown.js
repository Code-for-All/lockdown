import { getWorksheetByTitle } from './googlesheet';
import { transposeRows, transposeColumns } from '../../utils/dataHelper';
import logger from '../../utils/logger';
import { writeJSON } from '../../utils/file';
import { getCachedCellsRange } from '../../utils/sheet';

/**
 * Gets data from "Global" sheet.
 * Expected structure from gsheet as such:
 * [ 
 *    [ 'Afghanistan', 'AF', 'AFG' ],
 *    [ 'Albania', 'AL', 'ALB' ],
 *    [ 'Algeria', 'DZ', 'DZA' ],
 * ...
 * @returns {object}
 */
async function getGlobalData() {
  logger.log('[Lockdown:Global] start');
  const sheet = await getWorksheetByTitle('Global');
  const rows = await sheet.getCellsInRange('D5:F253');
  const headers = ['territory', 'iso2', 'iso3'];
  return transposeRows(headers, rows);
}

// TODO: Generate entry lists and loop through all the obtained cells to save roundtrips to gsheet
async function getDemoData() {
  const sheet = await getWorksheetByTitle('DEMO');
  // Precache cells data for all entries
  await sheet.loadCells('H1:AE60');

  // Entry meta section
  const entryMetaRows = getCachedCellsRange(sheet, 'H2:J6');
  const entryMetaData = transposeColumns(['editor', 'reviewed_by', 'status', 'type', 'date_of_entry'], entryMetaRows, true);

  // Entry entry section
  const entryInfoRows = getCachedCellsRange(sheet, 'H9:J12');
  const entryInfoData = transposeColumns(['name', 'url', 'title', 'date'], entryInfoRows, true);

  // Other sections: measures, in & out, etc... 
  const entryOtherRows = getCachedCellsRange(sheet, 'H14:J60');
  const entryOtherValues = transposeRows([
    'start',
    'end',
    'value'
  ], entryOtherRows);

  const entryOtherData = transposeColumns([
    'max_gathering',
    'lockdown_status',
    'city_movement_restriction',
    //...
  ], entryOtherValues);
  
  return {
    ...entryMetaData,
    entries: [
      {
        ...entryInfoData,
        ...entryOtherData
      }
    ]
  };
}

async function getLockdownData() {
  const territories = await getGlobalData();
  const lockdowns = {};

  // Temporary for testing
  var limit = 10;
  var count = 0;

  for (var [index, territory] of territories.entries()) {
    logger.log(`[Lockdown:WorkSheet] ${territory['territory']}`);
    lockdowns[territory['iso2']] = {};
    lockdowns[territory['iso2']]['lockdowns'] = await getDemoData();

    // Temporary for testing
    if (count++ > limit) break;
  }

  return lockdowns;
}

export default async function loadData() {
  const lockdowns = await getLockdownData();
  await writeJSON('datafile', lockdowns);
}