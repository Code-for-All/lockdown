import lockdown from './lockdown/googlesheet';

/**
 * Execute all loaders
 */
async function loadLoaders() {
  await lockdown();
}

loadLoaders();
