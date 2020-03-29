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

/**
 * Parses structure to standardized entry with appended label
 * @param {array} rows 
 * @param {array} labels 
 */
function parseEntryStructure(rows, labels) {
  const associativeRows = transposeRows([
    'start',
    'end',
    'value'
  ], rows);

  const values = transposeColumns(labels, associativeRows);
  const array = []
  for (const [label, row] of Object.entries(values)) {
    array.push({
      label: label,
      ...row
    })
  }
  return array;
}

// TODO: Generate entry lists and loop through all the obtained cells
async function getDemoData() {
  const sheet = await getWorksheetByTitle('DEMO');
  // Precache cells data for all entries
  await sheet.loadCells('H1:AE60');

  // Entry meta section
  const entryMetaRows = getCachedCellsRange(sheet, 'H2:J6');
  const entryMetaData = transposeColumns(['editor', 'reviewed_by', 'status', 'type', 'date_of_entry'], entryMetaRows, true);

  // TODO: should skip status != 'Ready'?

  // Entry entry section
  const entryInfoRows = getCachedCellsRange(sheet, 'H9:J12');
  const entryInfoData = transposeColumns(['name', 'url', 'title', 'date'], entryInfoRows, true);

  // Measures section
  const measures = parseEntryStructure(getCachedCellsRange(sheet, 'H14:J60'), [
      'max_gathering', // Max gathering number allowed (PAX)?
      'lockdown_status', // Is there a mandate for self-isolation?
      'city_movement_restriction', // Is going on the street allowed?
      'attending_religious_sites', // Is attenting religiouns sites allowed?
      'going_to_work', // Is going to work allowed?
      'military_not_deployed', // Is the Military NOT deployed?
      'academia_allowed', // Is going to academia allowed?
      'going_to_shops', // Is going to shops allowed?
      'electricity_nominal', // Is Electricity operating nominally?
      'water_nominal', // Is Water operating nominally?
      'internet_nominal', // Is Internet operating nominally?
  ]);

  // In & out section
  const landBordersCrossing = parseEntryStructure(getCachedCellsRange(sheet, 'H32:J38'), [
      'local', // Local destinations?
      'nationals_inbound', // Nationals inbound?
      'nationals_outbound', // Nationals outbound?
      'foreigners_inbound', // Foreigners inbound?
      'foreigners_outbound', // Foreigners outbound?
      'cross_border_workers', // Cross border workers?
      'commerce', // Commerce?
  ]);

  // TODO: the rest of in & out
  
  return {
    entries: [
      {
        meta: entryMetaData,
        info: entryInfoData,
        measures: measures,
        in_and_out: [
          ...landBordersCrossing,
        ]
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