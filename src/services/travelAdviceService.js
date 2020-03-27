import { EventTargetShim } from '../utils/EventTargetShim.js';

const cache = {};

class TravelAdviceService extends EventTargetShim {
  async getAdvice(opts) {
    const { iso2 } = opts;
    if (opts.forceRefresh || cache[iso2]?.status === 'failed' || !cache[iso2]) {
      try {
        cache[iso2] = {};
        const res = await (await fetch(`https://www.travel-advisory.info/api?countrycode=${iso2}`)).json();
        cache[iso2] = {
          status: 'success',
          advice: res.data[iso2].advisory.message,
          score: `${res.data[iso2].advisory.score}/5`
        };

        return cache[iso2];
      } catch (_) {
        cache[iso2] = {
          status: 'failed'
        };
      }
      this.dispatchEvent(new Event('change'));
      return cache[iso2];
    }
    return cache[iso2];
  }
}

export const travelAdviceService = new TravelAdviceService();
