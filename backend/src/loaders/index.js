import lockdown from './lockdown/lockdown';
// import coronaStatus from './corona/status';
import territoryMeta from './territory/territory';
import logger from '../utils/logger';

/**
 * Execute all loaders
 */
async function executeLoaders() {
  logger.log('[Lockdown] start');
  await lockdown();
  logger.log('[Territory] start');
  await territoryMeta();
  logger.log('COMPLETE');
}

executeLoaders();
