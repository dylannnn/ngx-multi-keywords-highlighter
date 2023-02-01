import { StorybookConfig, Options } from '@storybook/core-webpack';
import { rootMain, framework } from '../../../.storybook/main';

const config: StorybookConfig = {
  ...rootMain,
  framework,
  core: { ...rootMain.core, builder: 'webpack5' },
  stories: [
    ...rootMain.stories,
    '../**/*.stories.mdx',
    '../**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...(rootMain.addons || [])],
  docs: {
    autodocs: true,
    defaultName: 'Docs',
  },
  webpackFinal: async (config, { configType }: Options) => {
    // apply any global webpack configs that might have been specified in .storybook/main.ts
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType } as Options);
    }

    // add your own webpack tweaks if needed

    return config;
  },
};

module.exports = config;
