import { writeJSON } from '../../utils/file.js';
import { sumLockdown } from './territories';
import { sumCorona } from './corona';

/**
 * Loads totals for corona and lockdown count
 * @param {array} lockdownStatusByTerritory 
 */
export default async function loadData(lockdownStatusByTerritory) {
  const totalLockdowns = sumLockdown(lockdownStatusByTerritory);
  const corona = await sumCorona();

  writeJSON('totals', {
    corona: {
      confirmed: corona.confirmed,
      date: corona.date,
      deaths: corona.deaths,
    },
    territories: {
      lockdown: totalLockdowns.total,
      affected: totalLockdowns.affected
    }
  });
}