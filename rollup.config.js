import resolve from '@rollup/plugin-node-resolve';
import html from '@open-wc/rollup-plugin-html';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';
import { injectManifest } from 'rollup-plugin-workbox';
import applySwRegistration from 'rollup-plugin-apply-sw-registration';
import replace from '@rollup/plugin-replace';

export default [
  {
    input: 'sw.js',
    output: {
      format: 'es',
      dir: 'build'
    },
    plugins: [
      replace({ 'process.env.NODE_ENV': '"production"' }),
      resolve(),
      terser({ output: { comments: false } }),
    ]
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
      resolve(),
      html(),
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
        targets: [{ src: 'manifest.json', dest: 'build/' }],
        flatten: false
      }),
      injectManifest({
        swSrc: 'build/sw.js',
        swDest: 'build/sw.js',
        globDirectory: 'build/',
        mode: 'production',
        // modifyURLPrefix: {
        //   '': '/lockdown/'
        // }
      }),
      applySwRegistration()
    ]
  }
];