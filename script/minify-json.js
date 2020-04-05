const fs = require('fs');
const path = require('path');

const files = fs
  .readdirSync('data')
  .map((p) => path.join('data', p))
  .filter((p) => !fs.statSync(p).isDirectory());

for (const file of files) {
  const json = fs.readFileSync(file, 'utf-8');
  fs.writeFileSync(file, JSON.stringify(JSON.parse(json)), 'utf-8');
}
