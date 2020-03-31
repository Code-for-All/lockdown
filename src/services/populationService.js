import { EventTargetShim } from '../utils/EventTargetShim.js';

class PopulationService extends EventTargetShim {
  constructor() {
    super();
    this.cache = {};
  }

  async getPopulation(opts) {
    let { iso2 } = opts;
    iso2 = encodeURI(iso2);

    if (!/^[a-zA-Z]{2}$/.test(iso2)) {
      return;
    }

    if (opts.forceRefresh || this.cache[iso2]?.status === 'failed' || !this.cache[iso2]) {
      try {
        this.cache[iso2] = {};
        const res = await fetch(new URL('../../data/population.json', import.meta.url)).then(r => r.json());
        this.cache[iso2] = {
          status: 'success',
          totalPopulation: res.data[iso2].Population ?? 0
        };

        return this.cache[iso2];
      } catch (_) {
        this.cache[iso2] = {
          status: 'failed'
        };
      }
      this.dispatchEvent(new Event('change'));
      return this.cache[iso2];
    }
    return this.cache[iso2];
  }
}

export const populationService = new PopulationService();
