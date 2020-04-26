import { EventTargetShim } from '../utils/EventTargetShim.js';
import { format } from 'date-fns/esm';

class TotalsService extends EventTargetShim {
  constructor(){
    super();
    this.cache = {};
  }

  async getTotals(forceRefresh, date) {
    if (forceRefresh || !this.__totals) {
      this.__totals = fetch(new URL('../../data/totals.json', import.meta.url)).then((r) => r.json());
      this.cache = await this.__totals;
      this.dispatchEvent(new Event('change'));
    }
    return this.__totals[format(date, "yyyy-MM-dd")];
  }
}

export const totalsService = new TotalsService();
