import { writeJSON } from '../../utils/file.js';
import { sumLockdown } from './territories';
import { sumCorona } from './corona';

/**
 * Loads totals for corona and lockdown count
 * @param {array} lockdownStatusByTerritory 
 */
export default async function loadData(lockdownStatusByTerritory) {
  var result = {};
  const corona = await sumCorona();
  Object.keys(lockdownStatusByTerritory).forEach(day => {
    const totalLockdowns = sumLockdown(lockdownStatusByTerritory[day]);

    result[day] = {
      corona: {
        confirmed: corona.confirmed,
        date: corona.date,
        deaths: corona.deaths,
      },
      territories: {
        lockdown: totalLockdowns.total,
        affected: totalLockdowns.affected
      }
    }
  });

  writeJSON('totals', result);
}