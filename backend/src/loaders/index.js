import { performance } from 'perf_hooks';
import lockdownLoader from './lockdown/lockdown';
import worldmapLoader from './worldmap/worldmap';
import totalsLoader from './totals/totals';
import updatesLoader from './lockdown/updates';
import logger from '../utils/logger';
import { connect } from '../repositories';

/**
 * Execute all loaders
 */
async function executeLoaders() {
  const t0 = performance.now();
  
  logger.log('[Lockdown] start');

  var database = await connect();
  await lockdownLoader(database);

  logger.log('[WorldMap + Total + Updates] start');
  await Promise.all([
    totalsLoader(database),
    updatesLoader(),
  ]);

  const t1 = performance.now();
  logger.log(`Completed, took ${Math.round(t1 - t0)} milleseconds`);

  database.close();
}

executeLoaders();
