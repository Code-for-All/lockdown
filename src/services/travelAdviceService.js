import { EventTargetShim } from '../utils/EventTargetShim.js';

const cache = {};

class TravelAdviceService extends EventTargetShim {
  async getAdvice(opts) {
    const { iso2 } = opts;
    if (opts.forceRefresh || !cache[iso2]) {
      const res = await (await fetch(`https://www.travel-advisory.info/api?countrycode=${iso2}`)).json();

      const result = {
        advice: res.data[iso2].advisory.message,
        score: `${res.data[iso2].advisory.score}/5`
      }

      cache[iso2] = result;
      this.dispatchEvent(new Event('change'));
      return result
    }
    return cache[iso2];
  }
}

export const travelAdviceService = new TravelAdviceService();
