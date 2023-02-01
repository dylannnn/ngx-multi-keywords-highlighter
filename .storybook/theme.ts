import { create } from '@storybook/theming';
import logoUrl from './logo.svg';

export default create({
  base: 'light',
  colorPrimary: '#3748AC',
  colorSecondary: '#3748AC',

  brandTitle: 'Multi-Keywords Highlighter',
  brandUrl: 'https://yunfei.li',
  brandImage: process.env['NODE_ENV'] === 'production' ? logoUrl : '/logo.svg',
  brandTarget: '_self',
});
