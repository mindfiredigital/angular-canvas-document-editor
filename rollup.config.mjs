import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import path from 'path';

export default {
  input: path.resolve(__dirname, 'my-canvas-lib/src/public.api.ts'), // Adjust this to the correct path of your library's main entry point
  output: [
    {
      file: 'dist/my-canvas-lib/bundle.js', // Bundled output location
      format: 'es', // ES Module format
      sourcemap: true,
    },
    {
      file:  'dist/my-canvas-lib/bundle.min.js', // Minified version
      format: 'es',
      sourcemap: true,
      plugins: [terser()], // Minify the bundle
    },
  ],
  plugins: [
    peerDepsExternal(), // Exclude peer dependencies like Angular or RxJS
    nodeResolve(), // Resolves third-party modules in node_modules
    commonjs(), // Converts CommonJS modules to ES6, so they can be included in a Rollup bundle
    typescript({
      tsconfig: path.resolve(__dirname, 'my-canvas-lib/tsconfig.lib.json'), // Use your library's TypeScript configuration (adjust path if necessary)
    }),
    json(), // If your project needs to import any JSON files
  ],
  external: [
    '@angular/core',
    '@angular/common',
    '@angular/forms',
    '@angular/platform-browser',
    'rxjs',
    'zone.js',
  ],
  onwarn: (warning, warn) => {
    // Suppress circular dependency warnings from Angular
    if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    warn(warning);
  },
};
