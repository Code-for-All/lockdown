import { registerRoute, NavigationRoute } from 'workbox-routing';
import { NetworkFirst, CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';
import { createHandlerBoundToURL } from 'workbox-precaching';

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

/* Runtime json data files with a network-first strategy, we want up to date data, but in the case of no connection, cached data */
registerRoute(
  new RegExp('/data/.*\.json/'),
  new NetworkFirst()
);



/* Precache manifest */
precacheAndRoute(self.__WB_MANIFEST);

/* Return index.html on navigations */
const handler = createHandlerBoundToURL('/index.html');
const navigationRoute = new NavigationRoute(handler, {});
registerRoute(navigationRoute);

/* 
TODO:
  - precache json response? Runtime cache it?
  - any issues with basepath?
  - api calls/fetch calls
    - api.coronatracker.com/
    - travel-advisory.info/api
  - dynamic imports
    - leaflet is dynamically imported
  - strategy for https://api.mapbox.com/styles/v1/mapbox api requests (6 in total)
*/