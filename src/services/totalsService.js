import { EventTargetShim } from '../utils/EventTargetShim.js';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';

class TotalsService extends EventTargetShim {
  constructor() {
    super();
    this.cache = {};
    this.corona = {};
    fetch(new URL('../../data/totals.json', import.meta.url))
      .then((r) => r.json())
      .then((json) => {
        this.corona = json.corona;
      });
  }

  async getTotals(opts) {
    let { iso2, date } = opts;
    let startDate = opts.startDate;
    let endDate = opts.endDate;
    iso2 = encodeURI(iso2);

    startDate = startDate ? format(startDate, 'yyyy-MM-dd') : format(addDays(new Date(), -14), 'yyyy-MM-dd');
    endDate = endDate ? format(endDate, 'yyyy-MM-dd') : format(addDays(new Date(), 56), 'yyyy-MM-dd');

    const cacheKey = `${startDate}${endDate}`;

    if (opts.forceRefresh || this.cache[cacheKey]?.status === 'failed' || !this.cache[cacheKey]) {
      try {
        this.cache[cacheKey] = {};
        const res = await (await fetch(`https://lockdownsnapshots.azurewebsites.net/totals/lockdown/${startDate}/${endDate}`)).json();
        this.cache[cacheKey] = res;
      } catch (_) {
        this.cache[cacheKey] = {
          status: 'failed',
        };
      }

      var data = this.cache[cacheKey];
      if (data.status === 'failed') {
        this.dispatchEvent(new Event('change'));
        return data;
      }
    }

    return {
      status: 'success',
      corona: this.corona,
      territories: this.cache[cacheKey][date]
    };
  }
}

export const totalsService = new TotalsService();
