import resolve from '@rollup/plugin-node-resolve';
import html from '@open-wc/rollup-plugin-html';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';

export default {
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
      plugins: [[require.resolve('babel-plugin-bundled-import-meta'), { importStyle: 'baseURI' }]]
    }),
    terser({ output: { comments: false } }),
    copy({
      targets: [
        { src: 'src/assets/**/*', dest: 'build/src' },
        { src: 'src/style/**/*', dest: 'build/src' }
      ],
      flatten: false
    }),
    copy({
      targets: [{ src: 'data/**/*', dest: 'build/data' }],
      flatten: false
    })
  ]
};
