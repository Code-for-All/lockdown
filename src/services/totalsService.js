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
    let { date } = opts;
    let startDate = opts.startDate;
    let endDate = opts.endDate;

    startDate = startDate ? format(startDate, 'yyyy-MM-dd') : format(addDays(new Date(), -14), 'yyyy-MM-dd');
    endDate = endDate ? format(endDate, 'yyyy-MM-dd') : format(addDays(new Date(), 56), 'yyyy-MM-dd');
    const cacheKey = `${startDate}${endDate}`;

    if (opts.forceRefresh || this.cache[cacheKey]?.status === 'failed' || !this.cache[cacheKey]) {
      try {
        // this.cache[cacheKey] = {};
        const res = await Promise.all(
          [
            (await fetch(`https://lockdownsnapshots-apim.azure-api.net/totals/lockdown/${startDate}/${endDate}`)).json(),
            (await fetch(`http://localhost:3000/totals/covid/${startDate}/${endDate}`)).json()
          ]
        );  
        this.cache[cacheKey] = {territories: res[0], corona: res[1]};
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
      corona: this.cache[cacheKey].corona[date],
      territories: this.cache[cacheKey].territories[date],
    };
  }
}

export const totalsService = new TotalsService();
