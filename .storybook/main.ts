import { StorybookConfig } from '@storybook/core-webpack';

export const rootMain: StorybookConfig = {
  stories: [],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y']
};

export const framework = {
  name: '@storybook/angular',
  options: {}
};

export const docs = {
  autodocs: true
};