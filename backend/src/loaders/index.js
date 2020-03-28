// import lockdown from './lockdown/googlesheet';
// import coronaStatus from './corona/status';
import territoryMeta from './territory/territory';
import logger from '../utils/logger';

/**
 * Execute all loaders
 */
async function executeLoaders() {
  // await lockdown();
  // await coronaStatus();
  await territoryMeta();
  logger.log('Finished load territory');
  
}

executeLoaders();
