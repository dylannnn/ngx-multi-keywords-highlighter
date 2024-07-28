import {
  LABEL_POSITION,
  MATERIAL_COLOR,
} from './multi-keywords-highlighter.constants';

/**
 * Multi Keywords Highlighter Config Interface
 *
 * @namespace MultiKeywordsHighlighterConfig
 * @property appRoot - App root to search
 * @property caseSensitive - Is Search keywords case sensitive
 * @property chipIconColor - Keyword chip icon color
 * @property chipTextColor - Keyword chip text color
 * @property colorPalette - Pre-defined Color palette
 * @property customNodeFilter - Custom Node Filter
 * @property enableColorPalette - Enable Color Palette Component
 * @property enableHighlighterTooltip - Enable Highlighter Tooltip
 * @property enableToggleLabel - Enable Toggle Label
 * @property highlightClass - Keyword highlighter css class
 * @property initKeywords - Init Keywords ??
 * @property keywordsPlaceholder - Keywords search placeholder
 * @property linkToCopyright - Add link to copyright
 * @property minSearchLength - Minimum string length of search text
 * @property minWidth - Minimum width of search box
 * @property removable - Is allow to remove keywords
 * @property themeColor - Highlighter theme color
 * @property toggleLabelPosition - Toggle label position
 */
export interface MultiKeywordsHighlighterConfig {
  appRoot: string;
  caseSensitive: boolean;
  chipIconColor: string;
  chipTextColor: string;
  colorPalette: string[];
  customNodeFilter: NodeFilter | null;
  enableColorPalette: boolean;
  enableHighlighterTooltip: string;
  enableToggleLabel: boolean;
  highlightClass: string;
  initKeywords: boolean;
  keywordsLabel: string;
  keywordsPlaceholder: string;
  linkToCopyright: boolean;
  minSearchLength: number;
  minWidth: number;
  removable: boolean;
  themeColor: MATERIAL_COLOR;
  toggleLabelPosition: LABEL_POSITION;
}
