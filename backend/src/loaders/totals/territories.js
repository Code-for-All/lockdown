import { isLockdown } from '../../utils/typeHelper.js';

/**
 * Totals up locked down territories
 * @param {array} lockdownStatusByTerritory 
 */
export function sumLockdown(lockdownStatusByTerritory) {
  const total = Object.values(lockdownStatusByTerritory).reduce((prev, territory) => {
    return prev + isLockdown(territory.lockdown.lockdown_status) ? 1 : 0;
  }, 0);

  return total;
}