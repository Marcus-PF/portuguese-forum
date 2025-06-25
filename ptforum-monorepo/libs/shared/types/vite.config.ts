
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/libs/shared/types',
  plugins: [],
  test: {
    'watch': false,
    'globals': true,
    'environment': "node",
    'include': ['src/**/*.test*.ts'],
    'reporters': ["default"],
    'coverage': {
    'reportsDirectory': './test-output/vitest/coverage',
    'provider': 'v8' as const,
}
  },
}));
