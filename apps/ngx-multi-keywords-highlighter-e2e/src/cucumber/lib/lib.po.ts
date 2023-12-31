import { CommonSteps } from '../core/common.steps';
import { CorePageObjects } from '../core/core.po';

export class LibPageObjects extends CommonSteps implements CorePageObjects {
  pageObjects = {
    multiKeywordsHighlighterComponent:
      'library-multi-keywords-highlighter--playground',
    highlighterButton: 'highlight-keywords-button',
    highlighterMenu: 'highlight-keywords-panel',
  };
}

export const libPage = new LibPageObjects();
