import { EventTargetShim } from '../utils/EventTargetShim.js';

class PopulationService extends EventTargetShim {
  async getPopulation(forceRefresh) {
    if (forceRefresh || !this.__population) {
      this.__population = fetch(new URL('../../data/population.json', import.meta.url)).then(r => r.json());
      await this.__population;
      this.dispatchEvent(new Event('change'));
    }
    return this.__population;
  }
}


export const populationService = new PopulationService();
