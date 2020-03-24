import { EventTargetShim } from '../utils/EventTargetShim.js';

class PopulationService extends EventTargetShim {
  async getPopulation(forceRefresh) {
    if (forceRefresh || !this.__population) {
      this.__population = await (await fetch(new URL('../../data/worldpopulation.json', import.meta.url))).json();
      this.dispatchEvent(new Event('change'));
    }
    return this.__population;
  }
}

export const populationService = new PopulationService();
