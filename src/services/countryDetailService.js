import { EventTargetShim } from '../utils/EventTargetShim.js';

class CountryDetailService extends EventTargetShim {
  constructor() {
    super();
    this.cache = {};
  }

  async getDetails(opts) {
    let { iso2, date } = opts;
    iso2 = encodeURI(iso2);

    if (!/^[a-zA-Z]{2}$/.test(iso2)) {
      return;
    }
    let cacheKey = `${iso2}`;

    if (opts.forceRefresh || this._shouldInvalidate() || this.cache[cacheKey]?.status === 'failed' || !this.cache[cacheKey]) {
      try {
        this.cache[cacheKey] = {};

        const res = await (await fetch(new URL(`../../data/territories/${iso2}.json`, import.meta.url))).json();

        this.cache[cacheKey] = res;

      } catch (_) {
        this.cache[cacheKey] = {
          status: 'failed',
        };
      }
    }
      var data = this.cache[cacheKey];
      if (data.status === "failed") {
        this.dispatchEvent(new Event('change'));
        return data;
      }

      const travel = {};
      const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date)
      var dateFormatted =  `${date.getFullYear()}-${mo}-${date.getDate()}`;

      var res = data[dateFormatted];
      for (const type of Object.keys(res.lockdown.travel)) {
        for (const { label, value } of res.lockdown.travel[type]) {
          if (Array.isArray(travel[label])) {
            travel[label].push(value);
          } else {
            travel[label] = [value];
          }
        }
      }

      var result = {
        status: 'success',
        date: res.lockdown.date,
        measures: res.lockdown.measures,
        travel,
        max_gathering: res.lockdown.max_gathering,
      };
      this.__lastUpdate = Date.now();
      this.dispatchEvent(new Event('change'));
      return result;
    
  }
}

export const countryDetailService = new CountryDetailService();
