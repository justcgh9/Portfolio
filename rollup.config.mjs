import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/comic.ts',  
    output: {
      file: 'dist/comic.bundle.js',  
      format: 'es'
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({tsconfig: './tsconfig.json'}),
      terser()
    ]
  },
  {
    input: 'src/script.ts',
    output: {
      file: 'dist/script.bundle.js', 
      format: 'es'
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({tsconfig: './tsconfig.json'}),
      terser()
    ]
  }
];
