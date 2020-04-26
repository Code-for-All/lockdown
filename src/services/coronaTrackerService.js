import { EventTargetShim } from '../utils/EventTargetShim.js';

class CoronaTrackerService extends EventTargetShim {
  constructor() {
    super();
    this.cache = {};
  }

  async getCountry(opts) {
    let { iso2, date } = opts;
    iso2 = encodeURI(iso2);

    if (!/^[a-zA-Z]{2}$/.test(iso2)) {
      return;
    }

    if (opts.forceRefresh || this._shouldInvalidate() || this.cache[iso2]?.status === 'failed' || !this.cache[iso2]) {
      try {
        this.cache[iso2] = {};
        const res = await (await fetch(`https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=${iso2}`)).json();
        this.cache[iso2] = {
          status: 'success',
          totalConfirmed: res[0]?.totalConfirmed ?? 0,
          totalDeaths: res[0]?.totalDeaths ?? 0,
          totalRecovered: res[0]?.totalRecovered ?? 0,
        };
        this.__lastUpdate = Date.now();
        return this.cache[iso2];
      } catch {
        this.cache[iso2] = {
          status: 'failed',
        };
      }

      this.dispatchEvent(new Event('change'));
      return this.cache[iso2];
    }
    return this.cache[iso2];
  }
}

export const coronaTrackerService = new CoronaTrackerService();
