import { StorybookConfig } from '@storybook/core-webpack';

const config: StorybookConfig = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
  framework: {
    name: '@storybook/angular',
  },
  docs: {
    autodocs: true,
    defaultName: 'Docs',
  },
  core: {
    disableTelemetry: true,
  },
};

export default config;
