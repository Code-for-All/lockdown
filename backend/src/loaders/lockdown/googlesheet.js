import { GoogleSpreadsheet } from 'google-spreadsheet';
import { lockdownSheetId, googleServiceCredentials } from '../../config';

const doc = new GoogleSpreadsheet(lockdownSheetId);

/**
 * Initialize google spreadsheet object
 */
async function init() {
  await doc.useServiceAccountAuth(googleServiceCredentials);
  await doc.loadInfo(); // loads document properties and worksheets
}

/**
 * Populate data from 'ASM' sheet
 */
async function asm() {
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  // TODO: figure out structure
  console.log('Sheet', sheet)
}

export default async function load() {
  await init();
  await asm();
}