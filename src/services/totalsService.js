import { EventTargetShim } from '../utils/EventTargetShim.js';

class TotalsService extends EventTargetShim {
  async getTotals(forceRefresh) {
    if (forceRefresh || !this.__totals) {
      this.__totals = fetch(new URL('../../data/totals.json', import.meta.url));
      this.__totals = await (await this.__totals).json();
      this.dispatchEvent(new Event('change'));
    }
    return this.__totals;
  }
}

export const totalsService = new TotalsService();
