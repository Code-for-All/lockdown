import { performance } from 'perf_hooks';
import lockdown from './lockdown/lockdown';
// import coronaStatus from './corona/status';
import logger from '../utils/logger';

/**
 * Execute all loaders
 */
async function executeLoaders() {
  const t0 = performance.now();
  logger.log('[Lockdown] start');
  await lockdown();
  const t1 = performance.now();
  logger.log(`Completed, took ${Math.round(t1 - t0)} milleseconds`);
}

executeLoaders();
