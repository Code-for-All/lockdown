import { EventTargetShim } from '../utils/EventTargetShim.js';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';

class CoronaTrackerService extends EventTargetShim {
  constructor() {
    super();
    this.cache = {};
  }

  async getCountry(opts) {
    let { iso2, date } = opts;
    iso2 = encodeURI(iso2);

    const startDate = format(addDays(new Date(), -14), 'yyyy-MM-dd');
    const endDate = format(addDays(new Date(), 56), 'yyyy-MM-dd');

    if (!/^[a-zA-Z]{2}$/.test(iso2)) {
      return;
    }

    const cackeKey = `${iso2}${startDate}${endDate}`;

    if (opts.forceRefresh || this._shouldInvalidate() || this.cache[cackeKey]?.status === 'failed' || !this.cache[cackeKey]) {
      try {
        this.cache[cackeKey] = {};
        const res = await (
          await fetch(
            `http://api.coronatracker.com/v3/analytics/trend/country?countryCode=${iso2}&startDate=${startDate}&endDate=${endDate}`
          )
        ).json();
        this.cache[cackeKey] = {
          status: 'success',
          data: res,
        };
        this.__lastUpdate = Date.now();
      } catch {
        this.cache[cackeKey] = {
          status: 'failed',
        };
      }

      this.dispatchEvent(new Event('change'));
    }
    return this.cache[cackeKey];
  }
}

export const coronaTrackerService = new CoronaTrackerService();
