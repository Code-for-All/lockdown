import Database from "../repositories/Database";
import Axios from "axios";
import moment from '../utils/moment';

const MAXIMUM_RANGE_IN_DAYS = 70;

export class CovidService {
  /**
   * 
   * @param {Database} database 
   */
  constructor(database) {
    this.database = database;
  }

  async saveExternalCovidData(iso, startDate, endDate) {
    try {
      const startFormat = moment(startDate).format('YYYY-MM-DD');
      const endFormat = moment(endDate).format('YYYY-MM-DD');
      const url = `https://api.coronatracker.com/v3/analytics/trend/country?countryCode=${iso}&startDate=${startFormat}&endDate=${endFormat}`;
      const response = await Axios.get(url);
      let data = response.data;
      if (data.length > 0) {
        data = data.map(d => {
          d.last_updated = new Date(d.last_updated); return d
        });
        await this.database.covidRepository.insertManyOrUpdate(data, s => {
          return {
            country_code: s.country_code,
            last_updated: s.last_updated
          }
        });
      }
    }
    catch (_) {
      console.log(`Cannot upload data for ${iso}: ${_}`);
    }
  }

  async getLastCovidRecord() {
    const record = await this.database.covidRepository.getMaximumDate().toArray();
    return record[0];
  }

  async getTotals(startDate, endDate) {
    if (moment(startDate).isAfter(endDate)) {
      throw 'Start date should be less than end date';
    }

    if (moment(endDate).diff(startDate, 'days') > MAXIMUM_RANGE_IN_DAYS) {
      throw `Maximum date range is ${MAXIMUM_RANGE_IN_DAYS} days`;
    }

    var totals = await this.database.covidRepository
      .getTotals(startDate, endDate)
      .toArray();

    const result = {};
    totals.forEach(total => {
      result[total._id] = total;
    })
    return result;
  }
}