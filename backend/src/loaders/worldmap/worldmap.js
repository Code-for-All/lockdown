import { writeJSON } from '../../utils/file.js';

// Default lockdown status if data doesnt exist
const defaultLockdownStatus = null;

/**
 * Appends lockdown_status to each territory
 * @param {array} lockdownStatusByTerritory 
 */
export function appendLockdownStatus(lockdownStatusByTerritory) {
  const baseData = require('./base.json');
  const updatedFeatures = [];
  baseData['features'].forEach(feature => {
    let lockdownStatus = lockdownStatusByTerritory[feature.properties.iso2]?.lockdown?.lockdown_status;
    updatedFeatures.push({
      ...feature,
      properties: {
        ...feature['properties'],
        lockdown_status: lockdownStatus ?? defaultLockdownStatus,
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