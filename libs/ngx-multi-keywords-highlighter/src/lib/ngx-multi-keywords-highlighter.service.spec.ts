import { TestBed } from '@angular/core/testing';

import { NgxMultiKeywordsHighlighterService } from './ngx-multi-keywords-highlighter.service';

describe('NgxMultiKeywordsHighlighterService', () => {
  let service: NgxMultiKeywordsHighlighterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMultiKeywordsHighlighterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
