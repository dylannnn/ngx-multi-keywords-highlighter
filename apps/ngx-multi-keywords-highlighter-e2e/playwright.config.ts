import { workspaceRoot } from '@nx/devkit';
import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// For CI, you may want to set BASE_URL to the deployed application.
const baseURL = process.env['BASE_URL'] || 'http://localhost:4400';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

const playwrightBDDDir = defineBddConfig({
  verbose: false,
  features: ['./src/features/**/*.feature'],
  steps: ['./src/features/**/*.ts', './src/support/**/*.ts'],
  outputDir: '.feature-generate-bdd',
});

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  ...nxE2EPreset(__filename, {
    testDir: './src',
  }),
  testDir: playwrightBDDDir,
  outputDir: `${workspaceRoot}/dist/playwright/apps/ngx-multi-keywords-highlighter-e2e/runtime-output`,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    video: 'retain-on-failure',
  },
  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run mkh:storybook',
    url: 'http://localhost:4400',
    reuseExistingServer: !process.env['CI'],
    cwd: workspaceRoot,
    stdout: 'ignore',
    stderr: 'pipe',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 980 },
      },
    },
  ],
  reporter: [
    ['list', { printSteps: true }],
    [
      'html',
      {
        outputFolder: `${workspaceRoot}/dist/playwright/apps/ngx-multi-keywords-highlighter-e2e/report`,
      },
    ],
  ],
});
