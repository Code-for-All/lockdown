const fs = require('fs').promises;
const { exec } = require('child_process');

const now = Date.now();

async function execCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (stdout) {
        console.log(stdout);
      }
      if (stderr) {
        console.error(stderr);
      }
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

(async () => {
  try {
    const branchName = `test-git-${now}`;
    await execCommand('git checkout origin/master');
    await execCommand(`git checkout -b ${branchName}`);
    await fs.writeFile('foo.txt', `hello ${now}`, 'utf-8');
    await execCommand(`git add foo.txt`);
    await execCommand(`git commit -a -m "Add ${now}"`);
    await execCommand(`git push -u origin ${branchName}`);
  } catch (error) {
    console.error(error);
  }
})();
