import each from 'lodash/each';
import { lockdownSheetUrl } from '../../config.js';
import { writeJSON } from '../../utils/file.js';

export function parseData(territory) {
  return {
    contribute_url: `${lockdownSheetUrl}/edit#gid=${territory['googlesheet_tab_id']}`,
  }
}

export async function getData() {
  const territories = {};
  const territoriesMeta = require('./meta.json');
  each(territoriesMeta, (territory, isoCode) => {
    territories[isoCode] = parseData(territory)
  });
  return territories;
}

export default async function loadData() {
  const territories = await getData();
  each(territories, (territory, isoCode) => {
    writeJSON(`territories/${isoCode}`, territory);
  });
}