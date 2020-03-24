import { EventTargetShim } from '../utils/EventTargetShim.js';

class TotalsService extends EventTargetShim {
  async getTotals(forceRefresh) {
    if (forceRefresh || !this.__totals) {
      this.__totals = await (await fetch(new URL('../../data/totals.json', import.meta.url))).json();
      this.dispatchEvent(new Event('change'));
    }
    return this.__totals;
  }
}

export const totalsService = new TotalsService();
