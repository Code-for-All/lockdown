import resolve from '@rollup/plugin-node-resolve';
import html from '@open-wc/rollup-plugin-html';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';
import { injectManifest } from 'rollup-plugin-workbox';
import applySwRegistration from 'rollup-plugin-apply-sw-registration';
import replace from '@rollup/plugin-replace';
import fs from 'fs';
import path from 'path';
import uglifycss from 'uglifycss';
import packageJson from './package.json';

const versionModulePath = require.resolve('./src/version.js');

function preloadInitialImports(html, { bundle }) {
  const initialImports = [];
  for (const entrypoint of bundle.entrypoints) {
    initialImports.push(...entrypoint.chunk.imports);
  }
  console.log('initialImports', initialImports);
  return html.replace(
    '</head>',
    `${initialImports.map(i => `<link href="${i}" rel="preload" as="script" crossorigin="anonymous">`)}</head>`
  );
}

export default [
  {
    input: 'sw.js',
    output: {
      format: 'es',
      dir: 'build'
    },
    plugins: [replace({ 'process.env.NODE_ENV': '"production"' }), resolve(), terser({ output: { comments: false } })]
  },
  {
    input: 'index.html',
    output: {
      entryFileNames: '[hash].js',
      chunkFileNames: '[hash].js',
      format: 'es',
      dir: 'build'
    },

    plugins: [
      {
        name: 'version',
        load(id) {
          // replace the version module with a live version from the package.json
          if (id === versionModulePath) {
            return `export default '${packageJson.version}'`;
          }
        }
      },
      resolve(),
      html({
        transform: [preloadInitialImports]
      }),
      babel({
        babelHelpers: 'bundled',
        presets: [require.resolve('@babel/preset-modules')],
        plugins: [
          [require.resolve('babel-plugin-htm'), { import: 'preact' }],
          [require.resolve('babel-plugin-bundled-import-meta'), { importStyle: 'baseURI' }],
          require.resolve('@babel/plugin-proposal-optional-chaining'),
          require.resolve('@babel/plugin-proposal-nullish-coalescing-operator')
        ]
      }),
      terser({ output: { comments: false } }),
      copy({
        hook: 'buildStart',
        targets: [
          { src: 'src/assets/**/*', dest: 'build/src' },
          { src: 'src/style/**/*', dest: 'build/src' }
        ],
        flatten: false
      }),
      copy({
        hook: 'buildStart',
        targets: [{ src: 'data/**/*', dest: 'build/data' }],
        flatten: false
      }),
      copy({
        hook: 'buildStart',
        targets: [
          { src: 'manifest.json', dest: 'build/' },
          { src: 'manifest-dark.json', dest: 'build/' }
        ],
        flatten: false
      }),
      injectManifest({
        swSrc: 'build/sw.js',
        swDest: 'build/sw.js',
        globDirectory: 'build/',
        mode: 'production'
        // modifyURLPrefix: {
        //   '': '/lockdown/'
        // }
      }),
      applySwRegistration({
        htmlFileName: 'index.html'
        // base: 'lockdown/'
      }),
      {
        name: 'minify-css',
        writeBundle() {
          const filepath = path.resolve('./build/src/style/');
          fs.readdirSync(filepath)
            .map(file => path.join(filepath, file))
            .forEach(file => {
              fs.writeFileSync(file, uglifycss.processFiles([file]));
            });
        }
      }
    ]
  }
];
