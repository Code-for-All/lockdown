import { EventTargetShim } from '../utils/EventTargetShim.js';

class TravelAdviceService extends EventTargetShim {
  constructor() {
    super();
    this.cache = {};
  }

  async getAdvice(opts) {
    let { iso2 } = opts;
    iso2 = encodeURI(iso2);

    if (!/^[a-zA-Z]{2}$/.test(iso2)) {
      return;
    }

    if (opts.forceRefresh || this.cache[iso2]?.status === 'failed' || !this.cache[iso2]) {
      try {
        this.cache[iso2] = {};
        const res = await (await fetch(`https://www.travel-advisory.info/api?countrycode=${iso2}`)).json();
        this.cache[iso2] = {
          status: 'success',
          advice: res.data[iso2].advisory.message,
          score: `${res.data[iso2].advisory.score}/5`,
        };

        return this.cache[iso2];
      } catch (_) {
        this.cache[iso2] = {
          status: 'failed',
        };
      }
      this.dispatchEvent(new Event('change'));
      return this.cache[iso2];
    }
    return this.cache[iso2];
  }
}

export const travelAdviceService = new TravelAdviceService();
