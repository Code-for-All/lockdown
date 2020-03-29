import lockdown from './lockdown/lockdown';
// import coronaStatus from './corona/status';
import logger from '../utils/logger';

/**
 * Execute all loaders
 */
async function executeLoaders() {
  logger.log('[Lockdown] start');
  await lockdown();
  logger.log('COMPLETE');
}

executeLoaders();
