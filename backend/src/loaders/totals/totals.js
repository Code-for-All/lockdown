import { writeJSON } from '../../utils/file.js';
import { sumLockdown } from './territories';
import { sumCorona } from './corona';
import Database from '../../repositories/Database.js';
import { CovidService } from '../../services/CovidService.js';
import { GLOBAL_FIRST_DATE } from '../lockdown/snapshot/processor.js';
import moment from '../../utils/moment';

/**
 * Loads totals for corona and lockdown count
 * @param {array} lockdownStatusByTerritory 
 * @param {Database} database
 */
export default async function loadData(database) {
  const covidService = new CovidService(database);

  const countries = require('../../../../data/boundaries-adm0-v3.json').adm0.data.all;
  var start_date = moment((await covidService.getLastCovidRecord())?.last_updated || GLOBAL_FIRST_DATE);

  // if(moment().isSame(start_date, 'day')){
  //   return;
  // }

  for (const key in countries) {
    if (key.length == 2) {
      console.log(`Processed: ${key}`)
      await covidService.saveExternalCovidData(key, start_date.add(-2, 'days').toDate(), moment().add(2, 'days').toDate());
    }
  }
}