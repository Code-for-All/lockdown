import { EventTargetShim } from '../utils/EventTargetShim.js';

class LockdownsService extends EventTargetShim {
  async getLockdowns(forceRefresh) {
    if (forceRefresh || !this.__lockdowns) {
      this.__lockdowns = fetch(new URL('../../data/datafile.json', import.meta.url));
      this.__lockdowns = await (await this.__lockdowns).json();
      this.dispatchEvent(new Event('change'));
    }
    return this.__lockdowns;
  }
}

export const lockdownsService = new LockdownsService();
