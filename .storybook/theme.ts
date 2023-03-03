import { create } from '@storybook/theming/create';
import logoUrl from './logo.svg';

export default create({
  base: 'light',
  colorPrimary: '#3748AC',
  colorSecondary: '#3748AC',

  brandTitle: 'Multi-Keywords Highlighter',
  brandUrl: 'https://yunfei.li',
  brandImage: logoUrl,
  brandTarget: '_self',
});
