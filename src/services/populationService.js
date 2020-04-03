import { EventTargetShim } from '../utils/EventTargetShim.js';

class PopulationService extends EventTargetShim {
  constructor() {
    super();
    this.cache = {};
  }

  async getPopulation(forceRefresh) {
    if (forceRefresh || !this.__population) {
      try {
        this.__population = await fetch(new URL('../../data/population.json', import.meta.url)).then(r => r.json());
        await this.__population;
      } catch {
        this.__population = 'failed';
        return this.__population;
      }
    }
    return this.__population;
    this.dispatchEvent(new Event('change'));
  }
}

export const populationService = new PopulationService();
