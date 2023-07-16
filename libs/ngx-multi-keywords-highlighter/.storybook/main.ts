import { StorybookConfig } from '@storybook/core-webpack';
import { rootMain, framework } from '../../../.storybook/main';
const config: StorybookConfig = {
  ...rootMain,
  framework,
  core: {
    ...rootMain.core,
    builder: 'webpack5'
  },
  stories: [...rootMain.stories, '../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [...(rootMain.addons || [])],
  docs: {
    autodocs: true,
    defaultName: 'Docs'
  },
};
module.exports = config;