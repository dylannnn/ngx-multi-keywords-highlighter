import { MultiKeywordsHighlighterConstants } from './multi-keywords-highlighter.constants';

/**
 * Static library configuration
 *
 * @namespace LibConfig
 * @property {string} APP_NAME - Library name
 * @property {string} COPYRIGHT_AUTHOR - Library author name
 * @property {string} COPYRIGHT_CONTACT - Library author contact
 */
export class LibConfig {
  static readonly APP_NAME = MultiKeywordsHighlighterConstants.APP_NAME;
  static readonly COPYRIGHT_AUTHOR =
    MultiKeywordsHighlighterConstants.COPYRIGHT.AUTHOR;
  static readonly COPYRIGHT_CONTACT =
    MultiKeywordsHighlighterConstants.COPYRIGHT.CONTACT;
}
