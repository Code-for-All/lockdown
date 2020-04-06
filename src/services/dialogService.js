import { EventTargetShim } from '../utils/EventTargetShim.js';

class DialogService extends EventTargetShim {
  close() {
    this.dispatchEvent(new Event('close'));
  }
}

export const dialogService = new DialogService();
