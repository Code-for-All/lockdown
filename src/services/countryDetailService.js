import { EventTargetShim } from '../utils/EventTargetShim.js';

class CountryDetailService extends EventTargetShim {
  constructor() {
    super();
    this.cache = {};
  }

  async getDetails(opts) {
    let { iso2, date} = opts;
    iso2 = encodeURI(iso2);

    if (!/^[a-zA-Z]{2}$/.test(iso2)) {
      return;
    }
    let cacheKey = `${iso2}${date}`;
    if (opts.forceRefresh || this._shouldInvalidate() || this.cache[cacheKey]?.status === 'failed' || !this.cache[cacheKey]) {
      try {
        this.cache[cacheKey] = {};
        const res = await (await fetch(new URL(`http://localhost:3000/status/${iso2}/${date}`, import.meta.url))).json();

        const travel = {};

        for (const type of Object.keys(res.lockdown.travel)) {
          for (const { label, value } of res.lockdown.travel[type]) {
            if (Array.isArray(travel[label])) {
              travel[label].push(value);
            } else {
              travel[label] = [value];
            }
          }
        }

        this.cache[cacheKey] = {
          status: 'success',
          date: res.lockdown.date,
          measures: res.lockdown.measures,
          travel,
          max_gathering: res.lockdown.max_gathering,
        };
        this.__lastUpdate = Date.now();
        return this.cache[cacheKey];
      } catch (_) {
        this.cache[cacheKey] = {
          status: 'failed',
        };
      }
      this.dispatchEvent(new Event('change'));
      return this.cache[cacheKey];
    }
    return this.cache[cacheKey];
  }
}

export const countryDetailService = new CountryDetailService();
