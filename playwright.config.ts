import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,



  reporter: [['html', { open: 'never' }]],
  use: {
    trace: 'on',
    baseURL:'http://localhost:3000'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});
