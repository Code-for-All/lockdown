import { EventTargetShim } from '../utils/EventTargetShim.js';

const cache = {};

/**
 * if force refresh is true
 * if the previous request failed
 * if not already in cache
 */

class CoronaTrackerService extends EventTargetShim {
  async getCountry(opts) {
    const { iso2 } = opts;
    if (opts.forceRefresh || cache[iso2]?.status === 'failed' || !cache[iso2]) {
      try {
        cache[iso2] = {};
        const res = await (await fetch(`https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=${iso2}`)).json();

        cache[iso2] = {
          status: 'success',
          totalConfirmed: res[0].totalConfirmed,
          totalDeaths: res[0].totalDeaths,
          totalRecovered: res[0].totalRecovered
        };

        return cache[iso2];
      } catch {
        cache[iso2] = {
          status: 'failed'
        };
      }

      this.dispatchEvent(new Event('change'));
      return cache[iso2];
    }
    return cache[iso2];
  }
}

export const coronaTrackerService = new CoronaTrackerService();
