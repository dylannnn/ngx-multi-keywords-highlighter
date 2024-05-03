import { PageObject } from '../../core';
import { libPageData } from './lib.data';

export class LibPageObjects {
  pageObjects: PageObject = {
    multiKeywordsHighlighterComponent:
      'iframe.html?args=&id=library-multi-keywords-highlighter--playground&viewMode=story',
    highlighterButton: 'highlight-keywords-button',
    highlighterMenu: 'highlight-keywords-panel',
    highlighterToggleButton: 'highlight-keywords-slide-toggle',
  };

  getPageData(term: string) {
    return this.pageObjects[libPageData[term]];
  }
}
