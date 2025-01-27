import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  timeout: 100000,
  use: {
    headless: false, // Set to `true` for headless mode
    baseURL: 'https://www.saucedemo.com/',
    browserName: 'chromium',
    launchOptions: {
      slowMo: 50, // Slow down the test to see actions happening
    },
  },
  workers: 1,
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'always' }], // HTML report with 'playwright-report' as output folder
  ],
});