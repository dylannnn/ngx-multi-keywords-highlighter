import { StorybookConfig } from '@storybook/core-webpack';

export const rootMain: StorybookConfig = {
  stories: [],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-designs'
  ]
};

export const framework = {
  name: '@storybook/angular',
  options: {}
};