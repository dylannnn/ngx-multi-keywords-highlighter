import { StorybookConfig } from '@storybook/core-webpack';
import { framework, rootMain } from '../../../.storybook/main';

const config: StorybookConfig = {
  ...rootMain,
  framework,
  stories: [...rootMain.stories, '../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [...(rootMain.addons || [])],
  docs: {
    autodocs: true,
    defaultName: 'Docs'
  }
};

module.exports = config;