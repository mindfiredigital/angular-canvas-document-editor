import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file and directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  input: './projects/my-canvas-lib/src/public-api.ts', // Correct relative path for entry
  output: [
    {
      file: 'dist/my-canvas-lib/bundle.js', // Bundled output location
      format: 'es', // ES Module format
      sourcemap: true, // Generate sourcemaps
    },
    {
      file: 'dist/my-canvas-lib/bundle.min.js', // Minified version
      format: 'es',
      sourcemap: true,
      plugins: [terser()], // Minify the bundle
    },
  ],
  plugins: [
    peerDepsExternal(), // Exclude peer dependencies like Angular or RxJS
    nodeResolve(), // Resolves third-party modules in node_modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript({ tsconfig: './tsconfig.json' }), // Compile TypeScript files
    babel({
      babelHelpers: 'bundled', // Use bundled helpers
      exclude: 'node_modules/**', // Exclude node_modules from Babel processing
      presets: ['@babel/preset-env'], // Use preset-env for modern JavaScript
    }),
    json(), // Import JSON files if needed
  ],
  external: [
    '@angular/core',
    '@angular/common',
    '@angular/forms',
    '@angular/platform-browser',
    'rxjs',
    'zone.js', // Exclude Angular and RxJS from the bundle
  ],
  onwarn: (warning, warn) => {
    // Suppress circular dependency warnings from Angular
    if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    warn(warning); // Show all other warnings
  },
};
