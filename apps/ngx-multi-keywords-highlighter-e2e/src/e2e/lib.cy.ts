import { LibSupport } from "../support/lib.support";

const lib = new LibSupport();

describe('ngx-multi-keywords-highlighter', () => {
  beforeEach(() => {
    cy.viewport('macbook-15');
    lib.visitStorybookComponent('library-multi-keywords-highlighter--playground');
  });

  it('open the highlighter', () => {
    lib.exist('highlight-keywords-button');
    lib.click('highlight-keywords-button');
    lib.exist('highlight-keywords-panel');
  });

  it('toggle the highlighter', () => {
    lib.click('highlight-keywords-button');
    cy.clickOutside();
    lib.notExist('highlight-keywords-panel');
  });

  it('show the tooltip', () => {
    lib.hover('highlight-keywords-button');
    lib.existClass('.mdc-tooltip');
  });

  it('toggle keyword highlighter', () => {
    lib.click('highlight-keywords-button');
    lib.exist('highlight-keywords-panel');
    lib.expectKewwordsHighlighterOff();
    lib.validKeywordHighlighter();
    lib.turnOnKewwordsHighlighter();
  });

  it('highlight a keyword', () => {
    lib.highlightKewword('Lorem');
  });

  it('highlight multiple keywords', () => {
    lib.highlightMultipleKewword(['Lorem', 'quam']);
  });
});