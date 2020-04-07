# Project Lockdown

**Project Lockdown** is a progressive web application that shows various lockdown states for countries across the world helping people to find out if they can travel and at what restrictions.

## Scripts

```bash
# install dependencies
npm install

# start for local development
npm run start

# build for production with minification
npm run build

# test the production build locally
npm run start:build

# format the code
npm run format
```

## Demo

You can find a live demo of the master branch [here](https://zen-joliot-eeb856.netlify.com).

## Technologies used

### Frontend
- [Preact](https://preactjs.com/)/[htm](https://github.com/developit/htm)
- [csz](https://github.com/lukejacksonn/csz)
- [leafletjs](https://leafletjs.com/) (/mapbox api for tiles)
- [pwa-helper-components](https://github.com/thepassle/pwa-helpers)

### Dev
- [prettier](https://prettier.io/)
- [es-dev-server](https://open-wc.org/developing/es-dev-server.html)
- [github actions](https://github.com/features/actions)
- [netlify](https://www.netlify.com/)

### Build
- [rollup](https://rollupjs.org/guide/en/)
- [@rollup/plugin-node-resolve](https://www.npmjs.com/package/@rollup/plugin-node-resolve)
- [@open-wc/rollup-plugin-html](https://github.com/open-wc/open-wc/tree/master/packages/rollup-plugin-html)
- [rollup-plugin-terser](https://www.npmjs.com/package/rollup-plugin-terser)
- [rollup-plugin-babel](https://github.com/rollup/rollup-plugin-babel)
- [rollup-plugin-copy](https://www.npmjs.com/package/rollup-plugin-copy)
- [rollup-plugin-workbox](https://www.npmjs.com/package/rollup-plugin-workbox)
- [rollup-plugin-apply-sw-registration](https://github.com/thepassle/rollup-plugin-apply-sw-registration)
- [@rollup/plugin-replace](https://www.npmjs.com/package/@rollup/plugin-replace)
- [uglifycss](https://www.npmjs.com/package/uglifycss)
- [pwa-asset-generator](https://github.com/onderceylan/pwa-asset-generator)

## Contributing

Did you find a bug? Feel free create a PR, and we'll look at it as soon as we can. Please run `npm run format` before pushing 🙂.
