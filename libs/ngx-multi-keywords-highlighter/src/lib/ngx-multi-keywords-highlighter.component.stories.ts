import {
  moduleMetadata,
  Story,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MATERIAL_COLOR, LABEL_POSITION } from './core';
import { NgxMultiKeywordsHighlighterModule } from './ngx-multi-keywords-highlighter.module';
import { NgxMultiKeywordsHighlighterComponent } from './ngx-multi-keywords-highlighter.component';
import { LOREM_IPSUM } from '../../utilities/lorem-ipsum';

const storyRoot = 'story-root';

export default {
  title: 'Library/Multi Keywords Highlighter',
  component: NgxMultiKeywordsHighlighterComponent,
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
    // Required if need the hightlight function
    componentWrapperDecorator(
      (story) => `<${storyRoot}>${story}</${storyRoot}>`
    ),
  ],
} as Meta<NgxMultiKeywordsHighlighterComponent>;

/**
 * Default Template
 */
const DefaultTemplate: Story<NgxMultiKeywordsHighlighterComponent> = (
  args: NgxMultiKeywordsHighlighterComponent
) => ({
  props: {
    ...args,
    initialized: action('initialized'),
    keywordListOutput: action('keywordListOutput'),
    highlighted: action('highlighted'),
    openMenu: action('openMenu'),
    closeMenu: action('closeMenu'),
  },
});

export const Default = DefaultTemplate.bind({});
Default.args = {};
Default.parameters = {
  layout: 'centered',
  /**
   * storybook-addon-designs is currently incompatibal with storybook v7
   */
  // design: {
  //   type: 'figma',
  //   url: 'https://www.figma.com/file/JduLjCLQvSyhDnoGO2ELN8/Multi-Keywords-Highlighter?node-id=0%3A1',
  // },
};

/**
 * Custom Template with configuration
 */
const CustomTemplate: Story<NgxMultiKeywordsHighlighterComponent> = (
  args: NgxMultiKeywordsHighlighterComponent
) => ({
  props: {
    ...args,
    initialized: action('initialized'),
    keywordListOutput: action('keywordListOutput'),
    highlighted: action('highlighted'),
    openMenu: action('openMenu'),
    closeMenu: action('closeMenu'),
  },
  moduleMetadata: {
    imports: [
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
  },
});

export const Customized = CustomTemplate.bind({});

/**
 * DEMO Template with configuration
 */
export const Playground = CustomTemplate.bind({});

Playground.decorators = [
  componentWrapperDecorator(
    (story) => `
    <nav class="container my-8 m-auto p-6 border flex align-middle justify-between">
      <p class="mr-4">${LOREM_IPSUM}</p>
      <div>${story}</div>
    </nav>
  `
  ),
];
