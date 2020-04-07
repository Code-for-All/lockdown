import { performance } from 'perf_hooks';
import lockdownLoader from './lockdown/lockdown';
import worldmapLoader from './worldmap/worldmap';
import totalsLoader from './totals/totals';
import logger from '../utils/logger';

/**
 * Execute all loaders
 */
async function executeLoaders() {
  const t0 = performance.now();
  
  logger.log('[Lockdown] start');
  const { lockdownStatusByTerritory } = await lockdownLoader();

  logger.log('[WorldMap + Total] start');
  await Promise.all([
    worldmapLoader(lockdownStatusByTerritory),
    totalsLoader(lockdownStatusByTerritory)
  ]);

  const t1 = performance.now();
  logger.log(`Completed, took ${Math.round(t1 - t0)} milleseconds`);
}

executeLoaders();
