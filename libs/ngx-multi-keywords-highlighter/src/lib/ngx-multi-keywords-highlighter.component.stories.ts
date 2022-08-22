import {
  moduleMetadata,
  Story,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MATERIAL_COLOR, LABEL_POSITION } from './core';
import { NgxMultiKeywordsHighlighterModule } from './ngx-multi-keywords-highlighter.module';
import { NgxMultiKeywordsHighlighterComponent } from './ngx-multi-keywords-highlighter.component';

const storyRoot = 'story-root';

export default {
  title: 'Library/Multi Keywords Highlighter',
  component: NgxMultiKeywordsHighlighterComponent,
  // parameters: {
  //   layout: 'centered',
  // },
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
  props: args,
});

export const Default = DefaultTemplate.bind({});
Default.args = {};
Default.parameters = {
  layout: 'centered',
};

/**
 * Custom Template with configuration
 */
const CustomTemplate: Story<NgxMultiKeywordsHighlighterComponent> = (
  args: NgxMultiKeywordsHighlighterComponent
) => ({
  props: args,
  moduleMetadata: {
    imports: [
      NgxMultiKeywordsHighlighterModule.forRoot({
        themeColor: MATERIAL_COLOR.ACCENT,
        enableToggleLabel: true,
        toggleLabelPosition: LABEL_POSITION.AFTER,
        enableHighlighterTooltip: 'OPEN/CLOSE',
        linkToCopyright: true,
        minWidth: 320,
        appRoot: storyRoot,
      }),
    ],
  },
});

export const Custom = CustomTemplate.bind({});

/**
 * DEMO Template with configuration
 */
export const Playground = CustomTemplate.bind({});

Playground.decorators = [
  componentWrapperDecorator(
    (story) => `
    <nav class="container my-8 m-auto p-6 border flex align-middle justify-between">
      <p class="mr-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare sem sit amet dapibus sodales. Quisque porta viverra massa, vel tempus ipsum hendrerit in. Phasellus pulvinar metus erat, non commodo lectus gravida et. Proin nec est maximus, laoreet nisl a, scelerisque eros. Fusce sit amet hendrerit metus, a varius dolor. Pellentesque aliquam, ligula non sollicitudin fringilla, purus mi varius sapien, vitae semper quam tortor nec nulla. Ut facilisis dui non eros semper semper. Phasellus pretium lectus in sem bibendum, quis viverra augue posuere. Aliquam malesuada quam eget nisl euismod posuere. Phasellus sed lectus a metus auctor auctor eu non dui. Nunc tincidunt tristique malesuada. Integer dictum viverra ultricies. In eros eros, ultrices ac luctus sit amet, elementum id libero. Duis sed eros nibh. In eu imperdiet nulla.
      </p>
      <div>
      ${story}
      </div>
    </nav>
  `
  ),
];
