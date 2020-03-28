import load, { asm } from '../src/loaders/lockdown/googlesheet'

test('googlesheet asm structure', async () => {
  await load();
  const data = await asm();
  expect(Object.keys(data)).toEqual(expect.arrayContaining([]));
})