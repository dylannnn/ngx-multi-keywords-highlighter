import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  // viewportWidth: 1440,
  // viewportHeight: 900,
  e2e: {
    ...nxE2EPreset(__dirname),
    baseUrl: 'http://localhost:4200',
    projectId: '2dbycs',
  },
  experimentalStudio: true,
});
