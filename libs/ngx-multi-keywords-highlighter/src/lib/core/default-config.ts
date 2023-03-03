import { COLOR, COLOR_PALETTE } from './color-palette.constant';
import { MultiKeywordsHighlighterConfig } from './multi-keywords-highlighter-config.interface';
import {
  LABEL_POSITION,
  MATERIAL_COLOR,
  MultiKeywordsHighlighterConstants,
} from './multi-keywords-highlighter.constants';

/**
 * Default configuration
 *
 * @see MultiKeywordsHighlighterConfig
 */
export const defaultConfig: MultiKeywordsHighlighterConfig = {
  appRoot: MultiKeywordsHighlighterConstants.APP_ROOT,
  caseSensitive: false,
  chipIconColor: COLOR.WHITE,
  chipTextColor: COLOR.WHITE,
  colorPalette: COLOR_PALETTE.DEFAULT,
  customNodeFilter: null,
  enableColorPalette: MultiKeywordsHighlighterConstants.ENABLE_COLOR_PALETTE,
  enableHighlighterTooltip:
    MultiKeywordsHighlighterConstants.ENABLE_HIGHLIGHTER_TOOLTIP,
  enableToggleLabel: MultiKeywordsHighlighterConstants.ENABLE_TOGGLE_LABEL,
  highlightClass: MultiKeywordsHighlighterConstants.HIGHLIGHT_CLASS,
  initKeywords: MultiKeywordsHighlighterConstants.INIT_KEYWORDS,
  keywordsPlaceholder: MultiKeywordsHighlighterConstants.KEYWORDS_PLACEHOLDER,
  linkToCopyright: true,
  minSearchLength: MultiKeywordsHighlighterConstants.MIN_SEARCH_LENGTH,
  minWidth: MultiKeywordsHighlighterConstants.MIN_WIDTH,
  removable: MultiKeywordsHighlighterConstants.REMOVABLE,
  themeColor: MATERIAL_COLOR.PRIMARY,
  toggleLabelPosition: LABEL_POSITION.AFTER,
};
