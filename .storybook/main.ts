import { StorybookConfig } from '@storybook/core-webpack';
export const rootMain: StorybookConfig = {
  stories: [],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-a11y']
};
export const framework = {
  name: '@storybook/angular',
  options: {}
};
export const docs = {
  autodocs: true
};
export const addons = ['@storybook/addon-mdx-gfm'];