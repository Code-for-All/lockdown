import { EventTargetShim } from '../utils/EventTargetShim.js';

class PopulationService extends EventTargetShim {
  async getPopulation(forceRefresh) {
    if (forceRefresh || !this.__population) {
      this.__population = fetch(new URL('../../data/worldpopulation.json', import.meta.url));
      this.__population = await (await this.__population).json();
      this.dispatchEvent(new Event('change'));
    }
    return this.__population;
  }
}

export const populationService = new PopulationService();
