/// <reference types="vitest" />
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import dotenv from 'dotenv';
// Load test env file before anything else
dotenv.config({ path: path.resolve(__dirname, '../../../.env.test') });

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/libs/shared/logger',
  plugins: [
    // 👇 enables @ptforum/* path aliases in Vitest/Vite
    tsconfigPaths({
      projects: [path.resolve(__dirname, '../../../tsconfig.base.json')],
    }),
  ],
  // Uncomment if you use workers:
  // worker: { plugins: [tsconfigPaths()] },

  test: {
    watch: false,
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
