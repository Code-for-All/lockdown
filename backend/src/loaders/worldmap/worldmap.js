import { writeJSON } from '../../utils/file.js';

/**
 * Appends lockdown_status to each territory
 * @param {array} lockdownStatusByTerritory 
 */
export function appendLockdownStatus(lockdownStatusByTerritory) {
  const baseData = require('./base.json');
  const updatedFeatures = [];
  baseData['features'].forEach(feature => {
    updatedFeatures.push({
      ...feature,
      properties: {
        ...feature['properties'],
        lockdown_status: lockdownStatusByTerritory[feature.properties.iso2]?.lockdown?.lockdown_status ?? 'Unclear'
      }
    });
  });

  return {
    ...baseData,
    features: updatedFeatures
  }
}

export default async function loadData(lockdownStatusByTerritory) {
  const finalWorldmapData = appendLockdownStatus(lockdownStatusByTerritory);
  writeJSON('worldmap', finalWorldmapData);
}