/**
 * Multi Keywords Highlighter Constants
 */
export class MultiKeywordsHighlighterConstants {
  static readonly APP_NAME = 'Multi keywords highlighter';
  static readonly COPYRIGHT = {
    AUTHOR: 'Amfrontender',
    CONTACT: 'https://github.com/Amfrontender',
  };
  static KEYWORDS_PLACEHOLDER = 'Keywords...';
  static REMOVABLE = true;
  static MIN_WIDTH = 340;
  static ENABLE_TOGGLE_LABEL = false;
  static ENABLE_HIGHLIGHTER_TOOLTIP = 'Enable highlighter';
  static ENABLE_COLOR_PALETTE = false;
  static INIT_KEYWORDS = true;
  static HIGHLIGHTER = {
    ON: 'ON',
    OFF: 'OFF',
  };
  static HIGHLIGHT_CLASS = 'mh-text-highlighted';
  static MIN_SEARCH_LENGTH = 2;
  static APP_ROOT = 'app-root';
}

/**
 * Name Space
 */
export const NAME_SPACE = {
  KEYWORDS: 'MH_KEYWORDS',
  HIGHLIGHTED: 'MH_HIGHLIGHTED',
  HIGHLIGHT_STATUS: 'MH_HIGHLIGHT_STATUS',
};

export enum MATERIAL_COLOR {
  PRIMARY = 'primary',
  ACCENT = 'accent',
  WARN = 'warn',
}

export enum LABEL_POSITION {
  BEFORE = 'before',
  AFTER = 'after',
}
