import { EventTargetShim } from '../utils/EventTargetShim.js';

class CoronaStatusService extends EventTargetShim {
  async getCoronaStatus(forceRefresh) {
    if (forceRefresh || !this.__coronastatus) {
      this.__coronastatus = await (await fetch(new URL('../../data/coronastatus.json', import.meta.url))).json();
      this.dispatchEvent(new Event('change'));
    }
    return this.__coronastatus;
  }
}

export const coronaStatusService = new CoronaStatusService();
