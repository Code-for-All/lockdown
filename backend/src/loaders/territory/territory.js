import { lockdownSheetUrl } from '../../config.js';
import { writeJSON } from '../../utils/file.js';

export function parseData(territory) {
  return {
  }
}

export async function getData() {
  const territories = {};
  const territoriesMeta = require('./meta.json');
  for (const [isoCode, territory] of Object.entries(territoriesMeta)) {
    territories[isoCode] = parseData(territory);
  }
  return territories;
}

export default async function loadData() {
  const territories = await getData();
  for (const [isoCode, territory] of Object.entries(territories)) {
    writeJSON(`territories/${isoCode}`, territory);
  }
}