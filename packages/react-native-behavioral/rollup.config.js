import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import { defineConfig } from 'rollup';

const packageJson = require('./package.json');

export default [
  defineConfig({
    input: ['src/index.tsx'],
    output: [
      {
        file: `${packageJson.main}.js`,
        format: 'cjs',
        sourcemap: true,
        name: 'react-native-behavioral',
      },
      {
        file: `${packageJson.module}.js`,
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      typescript({ tsconfig: './tsconfig.json' }),
      resolve(),
      commonjs(),
      terser(),
      babel({ babelHelpers: 'bundled', configFile: './babel.config.js' }),
    ],
    external: ['react', 'react-dom', 'react-native'],
  }),
  defineConfig({
    input: 'src/index.tsx',
    output: [{ file: 'dist/index.d.ts', format: 'es', sourcemap: true }],
    plugins: [dts.default()],
    external: [/\.css$/],
  }),
];
