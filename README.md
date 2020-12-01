<a id="top"></a>
![logo](https://user-images.githubusercontent.com/9198668/85232285-68543380-b430-11ea-8353-1aafb79baf78.png)
***


## Please note that this repository has been transitioned to <a target='_blank' href="https://github.com/TheIOFoundation/ProjectLockdown">https://github.com/TheIOFoundation/ProjectLockdown</a>

The information contained here is outdated and kept provisionally for reference purposes only.

# Project Lockdown

**Project Lockdown** (an initiative from The IO Foundation) is a civic tech, interactive platform providing an overview of the state of Human and  Digital Rights around the globe. It evaluates policies obtained from high quality sources that may impact their observance. It provides, among other tools, a layered map interface that allows for a visual representation of the policies adopted, assisting a broad range of stakeholders in understanding the global state of their Rights. This empowers them to become active agents of global change.

The project is the result of the collaborative effort from a global network of partners and volunteers who are dedicating their time and resources to ensure that we do not degrade the Rights we currently enjoy while simultaneously preparing them to become a new generation of Rights defenders.

The objective is to provide an overview of the state of the world to citizens and assist journalists and Human Rights defenders in their reporting and overseeing tasks.

https://ProjectLockdown.world

The IO Foundation: www.TheIOFoundation.org

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
