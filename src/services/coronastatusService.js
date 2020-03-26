import { EventTargetShim } from '../utils/EventTargetShim.js';

class CoronaStatusService extends EventTargetShim {
  async getCoronaStatus(forceRefresh) {
    if (forceRefresh || !this.__coronastatus) {
      this.__coronastatus = fetch(new URL('../../data/coronastatus.json', import.meta.url));
      this.__coronastatus = await (await this.__coronastatus).json();
      this.dispatchEvent(new Event('change'));
    }
    return this.__coronastatus;
  }
}

export const coronaStatusService = new CoronaStatusService();
