import { addons } from '@storybook/addons';
import theme from '../../../.storybook/theme';
import favicon from '../../../tools/assets/favicon.svg';

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);

addons.setConfig({
  theme,
});
