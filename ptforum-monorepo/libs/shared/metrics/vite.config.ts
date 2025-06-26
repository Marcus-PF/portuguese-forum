/// <reference types="vitest" />
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import dotenv from 'dotenv';
import path from 'path';

// Load .env.test for consistent test env values
dotenv.config({ path: path.resolve(__dirname, '../../../.env.test') });

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/libs/shared/metrics',
  plugins: [
    tsconfigPaths({
      projects: [path.resolve(__dirname, '../../../tsconfig.base.json')],
    }),
  ],
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test.setup.ts'],
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
