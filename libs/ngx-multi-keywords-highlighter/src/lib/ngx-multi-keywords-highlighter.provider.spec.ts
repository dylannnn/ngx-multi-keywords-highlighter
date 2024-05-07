import { TestBed } from '@angular/core/testing';
import {
  MULTI_KEYWORDS_HIGHLIGHTER_CONFIG_TOKEN,
  MultiKeywordsHighlighterConfig,
  defaultConfig,
} from './core';
import { provideNgxMultiKeywordsHighlighter } from './ngx-multi-keywords-highlighter.provider';

describe('provideNgxMultiKeywordsHighlighter', () => {
  let config: MultiKeywordsHighlighterConfig;

  describe('default config', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [provideNgxMultiKeywordsHighlighter()],
      }).compileComponents();
      config = TestBed.inject(
        MULTI_KEYWORDS_HIGHLIGHTER_CONFIG_TOKEN,
      ) as unknown as MultiKeywordsHighlighterConfig;
    });

    it('should initialized with default config', () => {
      expect(config).toEqual(defaultConfig);
    });
  });

  describe('custom config', () => {
    const mockHighlightClass = 'test-highlight';

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          provideNgxMultiKeywordsHighlighter({
            highlightClass: mockHighlightClass,
          }),
        ],
      }).compileComponents();
      config = TestBed.inject(
        MULTI_KEYWORDS_HIGHLIGHTER_CONFIG_TOKEN,
      ) as unknown as MultiKeywordsHighlighterConfig;
    });

    it('should initialized with default config', () => {
      expect(config.highlightClass).toEqual(mockHighlightClass);
    });
  });
});
