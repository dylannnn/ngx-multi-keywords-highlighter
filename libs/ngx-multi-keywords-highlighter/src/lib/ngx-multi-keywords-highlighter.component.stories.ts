import { CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import {
  Meta,
  StoryObj,
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';
import { LOREM_IPSUM } from '../../utilities/lorem-ipsum';
import { LABEL_POSITION, MATERIAL_COLOR } from './core';
import { NgxMultiKeywordsHighlighterComponent } from './ngx-multi-keywords-highlighter.component';
import { NgxMultiKeywordsHighlighterModule } from './ngx-multi-keywords-highlighter.module';
const storyRoot = 'story-root';

const outputActions = {
  initialized: action('initialized'),
  keywordListOutput: action('keywordListOutput'),
  highlighted: action('highlighted'),
  openMenu: action('openMenu'),
  closeMenu: action('closeMenu'),
};

const meta: Meta<NgxMultiKeywordsHighlighterComponent> = {
  title: 'Library/Multi Keywords Highlighter',
  component: NgxMultiKeywordsHighlighterComponent,
  decorators: [
    componentWrapperDecorator(
      (story) => `<${storyRoot}>${story}</${storyRoot}>`,
    ),
  ],
  // render: (args: NgxMultiKeywordsHighlighterComponent) => ({
  //   props: {
  //     ...args,
  //     ...outputActions,
  //   },
  // }),
};

export default meta;
type Story = StoryObj<NgxMultiKeywordsHighlighterComponent>;

export const Default: Story = {
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        importProvidersFrom(
          NgxMultiKeywordsHighlighterModule.forRoot({
            themeColor: MATERIAL_COLOR.PRIMARY,
            enableToggleLabel: true,
            toggleLabelPosition: LABEL_POSITION.BEFORE,
            enableHighlighterTooltip: 'Turn on/off highlighter',
            minWidth: 320,
            appRoot: storyRoot,
          }),
        ),
      ],
    }),
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
};

export const Customized: Story = {
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        importProvidersFrom(
          NgxMultiKeywordsHighlighterModule.forRoot({
            themeColor: MATERIAL_COLOR.ACCENT,
            enableToggleLabel: true,
            toggleLabelPosition: LABEL_POSITION.BEFORE,
            enableHighlighterTooltip: 'On/Off',
            linkToCopyright: true,
            minWidth: 320,
            appRoot: storyRoot,
          }),
        ),
      ],
    }),
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
};

export const Playground: Story = {
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        importProvidersFrom(
          NgxMultiKeywordsHighlighterModule.forRoot({
            themeColor: MATERIAL_COLOR.ACCENT,
            enableToggleLabel: true,
            toggleLabelPosition: LABEL_POSITION.BEFORE,
            enableHighlighterTooltip: 'On/Off',
            linkToCopyright: true,
            minWidth: 320,
            appRoot: storyRoot,
          }),
        ),
      ],
    }),
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
    componentWrapperDecorator(
      (story) => `
        <${storyRoot}>
          <nav class="container my-8 m-auto p-6 border flex align-middle justify-between">
            <p class="mr-4">${LOREM_IPSUM}</p>
            <div>${story}</div>
          </nav>
        </${storyRoot}>
      `,
    ),
  ],
};
