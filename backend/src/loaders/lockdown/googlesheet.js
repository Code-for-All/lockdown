// import { GoogleSpreadsheet } from 'google-spreadsheet';
// import { lockdownSheetId, googleServiceCredentials } from '../../config';

// const doc = new GoogleSpreadsheet(lockdownSheetId);

// /**
//  * Initialize google spreadsheet object
//  */
// export async function init() {
//   await doc.useServiceAccountAuth(googleServiceCredentials);
//   await doc.loadInfo(); // loads document properties and worksheets
// }

// /**
//  * Populate data from 'Territories' sheet
//  */
// export async function asm() {
//   const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
//   // TODO: figure out structure
//   return {
//   };
// }

// export default async function load() {
//   await init();
//   // await asm();
// }