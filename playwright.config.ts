import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30000,
  retries: 2,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'test-results' }],
    ['junit', { outputFile: 'test-results/junit-report.xml' }]
  ],
  use: {
    baseURL: 'https://scopexmoney.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Chrome',
      use: { browserName: 'chromium' },
    }
  ],
};

export default config;