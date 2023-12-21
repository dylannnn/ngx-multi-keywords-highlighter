import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import {
  Meta,
  StoryObj,
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
  render: (args: NgxMultiKeywordsHighlighterComponent) => ({
    props: {
      ...args,
      initialized: outputActions.initialized,
    },
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        BrowserAnimationsModule,
        NgxMultiKeywordsHighlighterModule.forRoot({
          themeColor: MATERIAL_COLOR.PRIMARY,
          enableToggleLabel: true,
          toggleLabelPosition: LABEL_POSITION.BEFORE,
          enableHighlighterTooltip: 'Turn on/off highlighter',
          minWidth: 320,
          appRoot: storyRoot,
        }),
      ],
    }),
  ],
};

export const Customized: Story = {
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        BrowserAnimationsModule,
        NgxMultiKeywordsHighlighterModule.forRoot({
          themeColor: MATERIAL_COLOR.ACCENT,
          enableToggleLabel: true,
          toggleLabelPosition: LABEL_POSITION.BEFORE,
          enableHighlighterTooltip: 'On/Off',
          linkToCopyright: true,
          minWidth: 320,
          appRoot: storyRoot,
        }),
      ],
    }),
  ],
};

export const Playground: Story = {
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        BrowserAnimationsModule,
        NgxMultiKeywordsHighlighterModule.forRoot({
          themeColor: MATERIAL_COLOR.ACCENT,
          enableToggleLabel: true,
          toggleLabelPosition: LABEL_POSITION.BEFORE,
          enableHighlighterTooltip: 'On/Off',
          linkToCopyright: true,
          minWidth: 320,
          appRoot: storyRoot,
        }),
      ],
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
