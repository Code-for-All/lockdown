import { EventTargetShim } from '../utils/EventTargetShim.js';

class CoronaStatusService extends EventTargetShim {
  async getCoronaStatus(forceRefresh) {
    if (forceRefresh || !this.__coronastatus) {
      this.__coronastatus = fetch(new URL('../../data/coronastatus.json', import.meta.url)).then(r => r.json());
      await this.__coronastatus;
      this.dispatchEvent(new Event('change'));
    }
    return this.__coronastatus;
  }
}

export const coronaStatusService = new CoronaStatusService();
