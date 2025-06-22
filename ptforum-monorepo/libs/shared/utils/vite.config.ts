import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/libs/shared/utils',
  plugins: [
    tsconfigPaths({
      root: '../../../',
      projects: [
        'tsconfig.base.json',
      ],
    }),
  ],
  test: {
    'watch': false,
    'globals': true,
    'environment': 'jsdom',
    'include': ['{src,tests}/**/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}', 'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    'reporters': ['default'],
    'coverage': {
      'reportsDirectory': './test-output/vitest/coverage',
      'provider': 'v8' as const,
    }
  },
  build: {
    'outDir': '../../../dist/libs/shared/utils',
    'emptyOutDir': true,
    'lib': {
      'entry': 'src/index.ts',
      'name': '@ptforum/utils',
      'fileName': (format) => `index.${format}.js`
    },
    'rollupOptions': {
      'external': [],
    },
  },
}));
