import { registerRoute, NavigationRoute } from 'workbox-routing';
import { NetworkFirst, CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';
import { createHandlerBoundToURL } from 'workbox-precaching';

/* Install new SW when user clicks 'Update app' */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/* Cache the Google Fonts stylesheets with a stale-while-revalidate strategy. */
registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

/* Cache the underlying font files with a cache-first strategy for 1 year. */
registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);

/**  
 * Runtime country json data files with a network-first strategy, we want up to date data, 
 * but in the case of no connection, return cached data 
 */
 registerRoute(
  new RegExp('.*data/territories/.*.json'),
  new NetworkFirst({
    cacheName: 'territories',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 5,
        purgeOnQuotaError: true
      }),
    ],
  })
);

/**  
 * Runtime json data files with a network-first strategy, we want up to date data, 
 * but in the case of no connection, return cached data 
 */
registerRoute(
  new RegExp('.*data/.*.json'),
  new NetworkFirst({
    cacheName: 'datafiles'
  })
);

/**
 * Travel advisory, network first
 * This can start hogging up storage if users click on a lot of 
 * countries, so we restrict to 20 max
 */ 
registerRoute(
  new RegExp('https://www.travel-advisory.info/api?.*'),
  new NetworkFirst({
    cacheName: 'traveladvisory',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 5,
        purgeOnQuotaError: true
      }),
    ],
  })
);

/** 
 * Corona tracker, network first 
 * This can start hogging up storage if users click on a lot of 
 * countries, so we restrict to 20 max
 */
registerRoute(
  new RegExp('https://api.coronatracker.com/v3/.*'),
  new NetworkFirst({
    cacheName: 'coronatracker',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 5,
        purgeOnQuotaError: true
      }),
    ],
  })
);

/* Precache manifest */
precacheAndRoute(self.__WB_MANIFEST);

/* Return index.html on navigations */
const handler = createHandlerBoundToURL('/index.html');
const navigationRoute = new NavigationRoute(handler, {});
registerRoute(navigationRoute);
