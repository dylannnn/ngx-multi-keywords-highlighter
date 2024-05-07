import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import {
  MULTI_KEYWORDS_HIGHLIGHTER_CONFIG_TOKEN,
  MultiKeywordsHighlighterConfig,
  defaultConfig,
} from './core';

export function provideNgxMultiKeywordsHighlighter(
  config?: Partial<MultiKeywordsHighlighterConfig>,
): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: MULTI_KEYWORDS_HIGHLIGHTER_CONFIG_TOKEN,
      useValue: config ? config : defaultConfig,
    },
  ]);
}
