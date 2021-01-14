import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: {
    // 打包出口
    file: pkg.browser,
    format: 'umd',
    name: 'superCss',
  },
  plugins: [resolve(), commonjs(), typescript(), uglify()],
};
