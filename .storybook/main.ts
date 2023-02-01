import type { StorybookConfig } from '@storybook/core-common';

export const rootMain: StorybookConfig = {
  stories: [],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-interactions',
    'storybook-addon-designs',
  ],
};
