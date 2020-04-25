import { EventTargetShim } from '../utils/EventTargetShim.js';

class CountryDetailService extends EventTargetShim {
  constructor() {
    super();
    this.cache = {};
  }

  async getDetails(opts) {
    let { iso2 } = opts;
    iso2 = encodeURI(iso2);

    if (!/^[a-zA-Z]{2}$/.test(iso2)) {
      return;
    }

    if (opts.forceRefresh || this._shouldInvalidate() || this.cache[iso2]?.status === 'failed' || !this.cache[iso2]) {
      try {
        this.cache[iso2] = {};
        const res = await (await fetch(new URL(`../../data/territories/${iso2}.json`, import.meta.url))).json();

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

        this.cache[iso2] = {
          status: 'success',
          date: res.lockdown.date,
          measures: res.lockdown.measures,
          travel,
          max_gathering: res.lockdown.max_gathering,
        };
        this.__lastUpdate = Date.now();
        return this.cache[iso2];
      } catch (_) {
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

export const countryDetailService = new CountryDetailService();
