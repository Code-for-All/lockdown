import { getWorksheetByTitle } from './googlesheet';
import { transposeSheetRows, transposeSheetColumns } from '../../utils/dataHelper';
import logger from '../../utils/logger';
import { writeJSON } from '../../utils/file';

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
  const sheet = await getWorksheetByTitle('Global');
  const rows = await sheet.getCellsInRange('C5:E253');
  const headers = ['territory', 'iso2', 'iso3'];
  return transposeSheetRows(headers, rows);
}

// TODO: Generate entry lists and loop through all the obtained cells to save roundtrips to gsheet
async function getDemoData() {
  const sheet = await getWorksheetByTitle('DEMO');
  // Following is to precache cells data.
  // Caveat is cant be used with getCellsInRange.
  // Probably need to rework A1 range parser to obtain using cellIndex or so.
  // await sheet.loadCells('H1:AY60');
  // for (var i = 1; i < 10; i++) {
  //   await await sheet.getCellByA1('H'+i);
  //   logger.log('Loaded?');
  // }

  // Entry meta section
  const entryMeta1Rows = await sheet.getCellsInRange('H2:J6');
  const entryMeta1Data = transposeSheetColumns(['editor', 'reviewed_by', 'status', 'type', 'date_of_entry'], entryMeta1Rows, true);

  // Entry entry section
  const entryInfoRows = await sheet.getCellsInRange('H9:J12');
  const entryInfoData = transposeSheetColumns(['name', 'url', 'title', 'date'], entryInfoRows, true);

  // Other sections: measures, in & out, etc... 
  const entryOtherRows = await sheet.getCellsInRange('H14:J60');
  const entryOtherValues = transposeSheetRows([
    'start',
    'end',
    'value'
  ], entryOtherRows);

  const entryOtherData = transposeSheetColumns([
    'max_gathering',
    'lockdown_status',
    'city_movement_restriction',
    //...
  ], entryOtherValues);
  
  return {
    ...entryMeta1Data,
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


