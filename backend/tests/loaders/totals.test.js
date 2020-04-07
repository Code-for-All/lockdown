import { sumLockdown } from "../../src/loaders/totals/territories";
import { isLockdown } from "../../src/utils/typeHelper";
import { sumCorona } from "../../src/loaders/totals/corona";

test('total locked down territories', async () => {
  const territories = require('../data/lockdown_summary.json');

  const assertTotal = Object.values(territories).reduce((prev, territory) => {
    return prev + isLockdown(territory.lockdown.lockdown_status) ? 1 : 0;
  }, 0);

  expect(sumLockdown(territories)).toEqual(assertTotal);
})

test('total corona', async () => {
  const corona = await sumCorona();

  expect(typeof corona.confirmed).toEqual('number');
  expect(typeof corona.deaths).toEqual('number');
  expect(typeof corona.date).toEqual('string');
});