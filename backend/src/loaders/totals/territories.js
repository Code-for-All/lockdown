import { isLockdown } from '../../utils/typeHelper.js';

/**
 * Totals up locked down territories
 * @param {array} lockdownStatusByTerritory 
 */
export function sumLockdown(lockdownStatusByTerritory) {
  const total = Object.values(lockdownStatusByTerritory).reduce((prev, territory) => {
    if (isLockdown(territory.lockdown.lockdown_status)) {
      return prev + 1;
    }
    return prev;
  }, 0);

  return total;
}