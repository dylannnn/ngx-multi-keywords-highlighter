import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LOREM_IPSUM } from '../../utilities/lorem-ipsum';
import { generateKeyword, generateKeywordsFactory } from '../../utilities/generate-keywords.factory';
import { IKeyword } from './core';
import { defaultConfig } from './core/default-config';
import { MultiKeywordsHighlighterConfig } from './core/multi-keywords-highlighter-config.interface';
import { MULTI_KEYWORDS_HIGHLIGHTER_CONFIG_TOKEN } from './core/multi-keywords-highlighter.config.token';
import { MultiKeywordsHighlighterConstants } from './core/multi-keywords-highlighter.constants';
import { NgxMultiKeywordsHighlighterComponent } from './ngx-multi-keywords-highlighter.component';
import { NgxMultiKeywordsHighlighterModule } from './ngx-multi-keywords-highlighter.module';
import { NgxMultiKeywordsHighlighterService } from './ngx-multi-keywords-highlighter.service';

describe('NgxMultiKeywordsHighlighterService', () => {
  let service: NgxMultiKeywordsHighlighterService;
  let configToken: MultiKeywordsHighlighterConfig;
  let component: NgxMultiKeywordsHighlighterComponent;
  let fixture: ComponentFixture<NgxMultiKeywordsHighlighterComponent>;
  // let mockNgxMultiKeywordsHighlighterService: Partial<NgxMultiKeywordsHighlighterService>;

  beforeEach(async () => {
    // mockNgxMultiKeywordsHighlighterService = {
    //   toggleHighlightStatus: jest.fn(),
    //   addKeyword: jest.fn(),
    //   isValidKeyword: jest.fn(),
    //   isEmpty: jest.fn(),
    //   isDuplicated: jest.fn(),
    //   removeKeyword: jest.fn(),
    //   toggleHighlighter: jest.fn(),
    //   hightlightAllKeywords: jest.fn(),
    //   deHightlightAllKeywords: jest.fn(),
    //   hightlightKeyword: jest.fn(),
    //   createTreeWorker: jest.fn(),
    //   createHighlightElements: jest.fn(),
    //   deHightlightKeyword: jest.fn(),
    //   isMatchedKeyword: jest.fn(),
    // };

    await TestBed.configureTestingModule({
      declarations: [
        NgxMultiKeywordsHighlighterComponent
      ],
      imports: [
        NoopAnimationsModule,
        NgxMultiKeywordsHighlighterModule.forRoot(defaultConfig)
      ],
      providers: [
        NgxMultiKeywordsHighlighterService
      ],
    }).compileComponents();

    service = TestBed.inject(NgxMultiKeywordsHighlighterService);
    configToken = TestBed.inject(MULTI_KEYWORDS_HIGHLIGHTER_CONFIG_TOKEN) as MultiKeywordsHighlighterConfig;

    fixture = TestBed.createComponent(NgxMultiKeywordsHighlighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get config', () => {
    expect(configToken).toStrictEqual(defaultConfig);
    expect(service.config).toStrictEqual(defaultConfig);
  });

  it('should get localKeywords', () => {
    expect(service.localKeywords).toHaveLength(0);
    service['localKeywordsSubject'].next(generateKeywordsFactory(5));
    expect(service.localKeywords).toHaveLength(5);
  });

  it('should get highlighted StatusText OFF', fakeAsync(() => {
    service.highlightedStatus$.subscribe({
      next: (result: boolean) => {
        expect(result).toBe(false);
      }
    });

    service.highlightedStatusText$.subscribe({
      next: (result: string) => {
        expect(result).toEqual(MultiKeywordsHighlighterConstants.HIGHLIGHTER.OFF)
      }
    });
  }));

  it('should get highlighted StatusText ON', fakeAsync(() => {
    service['highlightedStatusSubject'].next(true);

    service.highlightedStatus$.subscribe({
      next: (result: boolean) => {
        expect(result).toBe(true);
      }
    });

    service.highlightedStatusText$.subscribe({
      next: (result: string) => {
        expect(result).toEqual(MultiKeywordsHighlighterConstants.HIGHLIGHTER.ON)
      }
    });
  }));

  it('should get isHighlight', () => {
    expect(service.isHighlight).toBe(false);
    service['highlightedStatusSubject'].next(true);
    expect(service.isHighlight).toBe(true);
  });

  it('should get rootNode', () => {
    const rootNode = service.rootNode;
    expect(rootNode).toBeDefined();
  });

  it('should toggleHighlightStatus', () => {
    service.toggleHighlightStatus(true);
    service.highlightedStatus$.subscribe({
      next: (status: boolean) => {
        expect(status).toBe(true);
      }
    });
  });

  it('should add a keyword', () => {
    const isValidKeywordSpy = jest.spyOn(service, 'isValidKeyword');
    const hightlightKeywordSpy = jest.spyOn(service, 'hightlightKeyword');
    const keyword = generateKeyword();
    const { id: _, ...newKeyword } = keyword;
    const currentSequence = service.keywordSequence.value;

    service.addKeyword(newKeyword);

    expect(isValidKeywordSpy).toHaveBeenCalledWith(newKeyword);
    expect(service.keywordSequence.value).toEqual(currentSequence + 1);
    expect(hightlightKeywordSpy).not.toHaveBeenCalled();

    service.localKeywords$.subscribe({
      next: (result: IKeyword[]) => {
        expect(result.length).toBe(1);
        expect(result[0]).toStrictEqual({
          id: currentSequence + 1,
          ...newKeyword
        });
      }
    });
  });

  it('should add a keyword and highlight it', () => {
    const isValidKeywordSpy = jest.spyOn(service, 'isValidKeyword');
    const hightlightKeywordSpy = jest.spyOn(service, 'hightlightKeyword');
    const keyword = generateKeyword();
    const { id: _, ...newKeyword } = keyword;

    service['highlightedStatusSubject'].next(true);
    service.addKeyword(newKeyword);

    expect(service.isHighlight).toBe(true);
    expect(isValidKeywordSpy).toHaveBeenCalledWith(newKeyword);
    expect(hightlightKeywordSpy).toHaveBeenCalledWith(newKeyword);
  });
  
  it('should not add a keyword when keyword name is empty string', () => {
    const isValidKeywordSpy = jest.spyOn(service, 'isValidKeyword');
    const isEmptySpy = jest.spyOn(service, 'isEmpty');
    const isDuplicatedSpy = jest.spyOn(service, 'isDuplicated');
    const keyword = generateKeyword();
    const currentSequence = service.keywordSequence.value;
    const { id: _, ...newKeyword } = keyword;
    newKeyword.name = '';

    service.addKeyword(newKeyword);

    expect(isValidKeywordSpy).toHaveBeenCalledWith(newKeyword);
    expect(isValidKeywordSpy).toHaveReturnedWith(false);
    expect(service.keywordSequence.value).toEqual(currentSequence);
    expect(isEmptySpy).toHaveBeenCalledWith(newKeyword);
    expect(isEmptySpy).toHaveReturnedWith(true);
    expect(isDuplicatedSpy).not.toHaveBeenCalled();
    expect(service.localKeywords).toHaveLength(0);
  });

  it('should not add a keyword when keyword name is duplicated', () => {
    const isValidKeywordSpy = jest.spyOn(service, 'isValidKeyword');
    const isEmptySpy = jest.spyOn(service, 'isEmpty');
    const isDuplicatedSpy = jest.spyOn(service, 'isDuplicated');
    const existingKeyword = generateKeyword();
    const { id: _, ...newKeyword } = existingKeyword;
    const currentSequence = service.keywordSequence.value;

    service['localKeywordsSubject'].next([existingKeyword]);
    expect(service.localKeywords).toHaveLength(1);

    service.addKeyword(newKeyword);

    expect(isValidKeywordSpy).toHaveBeenCalledWith(newKeyword);
    expect(isValidKeywordSpy).toHaveReturnedWith(false);
    expect(service.keywordSequence.value).toEqual(currentSequence);
  
    expect(isEmptySpy).toHaveBeenCalledWith(newKeyword);
    expect(isEmptySpy).toHaveReturnedWith(false);
    expect(isDuplicatedSpy).toHaveBeenCalledWith(newKeyword);
    expect(isDuplicatedSpy).toHaveReturnedWith(true);
    expect(service.localKeywords).toHaveLength(1);
  });

  it('should valid a keyword', () => {
    const isValidKeywordSpy = jest.spyOn(service, 'isValidKeyword');
    const isEmptySpy = jest.spyOn(service, 'isEmpty');
    const isDuplicatedSpy = jest.spyOn(service, 'isDuplicated');
    const keyword = generateKeyword();

    service.isValidKeyword(keyword);

    expect(isValidKeywordSpy).toHaveBeenCalledWith(keyword);
    expect(isEmptySpy).toHaveBeenCalledWith(keyword);
    expect(isEmptySpy).toHaveReturnedWith(false);
    expect(isDuplicatedSpy).toHaveBeenCalledWith(keyword);
    expect(isDuplicatedSpy).toHaveReturnedWith(false);
    expect(isValidKeywordSpy).toHaveReturnedWith(true);
  });

  it('should not valid a keyword when keyword name is empty string', () => {
    const isValidKeywordSpy = jest.spyOn(service, 'isValidKeyword');
    const isEmptySpy = jest.spyOn(service, 'isEmpty');
    const isDuplicatedSpy = jest.spyOn(service, 'isDuplicated');
    const keyword = generateKeyword();
    keyword.name = '';

    service.isValidKeyword(keyword);

    expect(isValidKeywordSpy).toHaveBeenCalledWith(keyword);
    expect(isEmptySpy).toHaveBeenCalledWith(keyword);
    expect(isEmptySpy).toHaveReturnedWith(true);
    expect(isDuplicatedSpy).not.toHaveBeenCalled();
    expect(isValidKeywordSpy).toHaveReturnedWith(false);
  });

  // TODO: 
  it('should not valid a keyword when keyword name is duplicated', () => {
    const isValidKeywordSpy = jest.spyOn(service, 'isValidKeyword');
    const isEmptySpy = jest.spyOn(service, 'isEmpty');
    const isDuplicatedSpy = jest.spyOn(service, 'isDuplicated');
    const existingKeyword = generateKeyword();
    const { id: _, ...newKeyword } = existingKeyword;

    service['localKeywordsSubject'].next([existingKeyword]);

    service.isValidKeyword(newKeyword);

    expect(isValidKeywordSpy).toHaveBeenCalledWith(newKeyword);
    expect(isEmptySpy).toHaveBeenCalledWith(newKeyword);
    expect(isEmptySpy).toHaveReturnedWith(false);
    expect(isDuplicatedSpy).toHaveBeenCalledWith(newKeyword);
    expect(isDuplicatedSpy).toHaveReturnedWith(true);
    expect(isValidKeywordSpy).toHaveReturnedWith(false);
  });

  it('should check a keyword is empty', () => {
    const keyword = generateKeyword();

    expect(service.isEmpty(keyword)).toBe(false);
  });

  it('should check a keyword is empty when keyword name is empty string', () => {
    const keyword = generateKeyword();
    keyword.name = '';
  
    expect(service.isEmpty(keyword)).toBe(true);
  });

  it('should check a keyword is empty when keyword name is empty string with space(s)', () => {
    const keyword = generateKeyword();

    keyword.name = ' ';
    expect(service.isEmpty(keyword)).toBe(true);

    keyword.name = '   ';
    expect(service.isEmpty(keyword)).toBe(true);
  });

  it('should check a keyword is not duplicated', () => {
    const keyword = generateKeyword();
    expect(service.isDuplicated(keyword)).toBe(false);
  });

  it('should check a keyword is duplicated when there is one existing keyword', () => {
    const existingKeyword = generateKeyword();
    const { id: _, ...newKeyword } = existingKeyword;

    service['localKeywordsSubject'].next([existingKeyword]);
    expect(service.isDuplicated(newKeyword)).toBe(true);
  });

  it('should check a keyword is duplicated when there are more than one existing keyword', () => {
    const existingKeywords = generateKeywordsFactory(5);
    const { id: _, ...anotherNewKeyword } = existingKeywords[2];

    service['localKeywordsSubject'].next(existingKeywords);
    expect(service.isDuplicated(anotherNewKeyword)).toBe(true);
  });

  it('should remove a keyword', () => {
    const deHightlightKeywordSpy = jest.spyOn(service, 'deHightlightKeyword');
    const localKeywordsSubjectSpy = jest.spyOn(service['localKeywordsSubject'], 'next');
    const existingKeywords = generateKeywordsFactory(5);
    const keywordToRemove = existingKeywords[1];

    service['localKeywordsSubject'].next(existingKeywords);
    expect(service.localKeywords).toHaveLength(5);

    service.removeKeyword(keywordToRemove);

    expect(deHightlightKeywordSpy).toHaveBeenCalledWith(keywordToRemove);
    expect(localKeywordsSubjectSpy).toHaveBeenCalled();
    expect(service.localKeywords).toHaveLength(4);
  });

  it('should not remove a keyword', () => {
    const deHightlightKeywordSpy = jest.spyOn(service, 'deHightlightKeyword');
    const existingKeywords = generateKeywordsFactory(5);
    const keywordToRemove = generateKeyword();

    service['localKeywordsSubject'].next(existingKeywords);
    expect(service.localKeywords).toHaveLength(5);

    service.removeKeyword(keywordToRemove);

    expect(deHightlightKeywordSpy).not.toHaveBeenCalled();
    expect(service.localKeywords).toHaveLength(5);
  });

  it('should toggleHighlighter when isHighlight to be false', () => {
    const hightlightAllKeywordsSpy = jest.spyOn(service, 'hightlightAllKeywords');
    const deHightlightAllKeywordsSpy = jest.spyOn(service, 'deHightlightAllKeywords');
    expect(service.isHighlight).toBe(false);

    service.toggleHighlighter();

    expect(hightlightAllKeywordsSpy).not.toHaveBeenCalled();
    expect(deHightlightAllKeywordsSpy).toHaveBeenCalled();
  });

  it('should toggleHighlighter when isHighlight to be true', () => {
    const hightlightAllKeywordsSpy = jest.spyOn(service, 'hightlightAllKeywords');
    const deHightlightAllKeywordsSpy = jest.spyOn(service, 'deHightlightAllKeywords');

    service['highlightedStatusSubject'].next(true);
    expect(service.isHighlight).toBe(true);  

    service.toggleHighlighter();

    expect(hightlightAllKeywordsSpy).toHaveBeenCalled();
    expect(deHightlightAllKeywordsSpy).not.toHaveBeenCalled();
  });

  it('should hightlightAllKeywords', () => {
    const hightlightKeywordSpy = jest.spyOn(service, 'hightlightKeyword');
    const existingKeywords = generateKeywordsFactory(5);

    service['localKeywordsSubject'].next(existingKeywords);

    service.hightlightAllKeywords();

    expect(hightlightKeywordSpy).toHaveBeenCalledTimes(5);
    expect(hightlightKeywordSpy).toHaveBeenNthCalledWith(1, existingKeywords[0]);
    expect(hightlightKeywordSpy).toHaveBeenNthCalledWith(2, existingKeywords[1]);
    expect(hightlightKeywordSpy).toHaveBeenNthCalledWith(3, existingKeywords[2]);
    expect(hightlightKeywordSpy).toHaveBeenNthCalledWith(4, existingKeywords[3]);
    expect(hightlightKeywordSpy).toHaveBeenNthCalledWith(5, existingKeywords[4]);
  });

  it('should deHightlightAllKeywords', () => {
    const deHightlightAllKeywordsSpy = jest.spyOn(service, 'deHightlightKeyword');
    const existingKeywords = generateKeywordsFactory(5);

    service['localKeywordsSubject'].next(existingKeywords);

    service.deHightlightAllKeywords();

    expect(deHightlightAllKeywordsSpy).toHaveBeenCalledTimes(5);
    expect(deHightlightAllKeywordsSpy).toHaveBeenNthCalledWith(1, existingKeywords[0]);
    expect(deHightlightAllKeywordsSpy).toHaveBeenNthCalledWith(2, existingKeywords[1]);
    expect(deHightlightAllKeywordsSpy).toHaveBeenNthCalledWith(3, existingKeywords[2]);
    expect(deHightlightAllKeywordsSpy).toHaveBeenNthCalledWith(4, existingKeywords[3]);
    expect(deHightlightAllKeywordsSpy).toHaveBeenNthCalledWith(5, existingKeywords[4]);
  });

  describe('hightlightKeyword', () => {
    it('should hightlight a keyword once', () => {
      const keywordsExist = generateKeywordsFactory(3);
      const keywordToHighlight = keywordsExist[0];
      const createHighlightElementsSpy = jest.spyOn(service, 'createHighlightElements');
  
      const createTreeWalkerMock: jest.Mock<TreeWalker> = jest.fn();
  
      document.createTreeWalker = createTreeWalkerMock;
  
      const parentNodeMock = {
        insertBefore: jest.fn(),
        removeChild: jest.fn(),
        nodeValue: 'parent node value'
      }
  
      const nextNodeMocks = jest.fn()
        .mockReturnValueOnce({
          nodeType: Node.TEXT_NODE,
          nodeName: 'DIV',
          childNodes: [],
          nodeValue: keywordsExist[0].name,
          data: keywordsExist[0].name,
          parentNode: parentNodeMock
        })
        .mockReturnValueOnce({
          nodeType: Node.TEXT_NODE,
          nodeName: 'SPAN',
          childNodes: [],
          nodeValue: keywordsExist[1].name,
          data: keywordsExist[1].name,
          parentNode: parentNodeMock
        })
        .mockReturnValueOnce({
          nodeType: Node.TEXT_NODE,
          nodeName: 'DIV',
          childNodes: [],
          nodeValue: keywordsExist[2].name,
          data: keywordsExist[2].name,
          parentNode: parentNodeMock
        });
      
      createTreeWalkerMock.mockReturnValue({
        nextNode: nextNodeMocks
      } as unknown as TreeWalker);
  
      service.hightlightKeyword(keywordToHighlight);
  
      expect(nextNodeMocks).toHaveBeenCalledTimes(4);
      expect(createHighlightElementsSpy).toHaveBeenCalledTimes(1);
      expect(parentNodeMock.insertBefore).toHaveBeenCalledTimes(1);
      expect(parentNodeMock.removeChild).toHaveBeenCalledTimes(1);
      expect(parentNodeMock.nodeValue).toBe('parent node value');
    });

    // TODO
    // Coverage on line: 174-175,182-183,188,193


    it('should not hightlight a keyword if keyword is falcy', () => {
      const hightlightKeywordSpy = jest.spyOn(service, 'hightlightKeyword');
      const createTreeWalkerMock = jest.fn();
      document.createTreeWalker = createTreeWalkerMock;
      createTreeWalkerMock.mockReturnValueOnce('mock return TreeWalker');
  
      service.hightlightKeyword(undefined as unknown as IKeyword);
      expect(createTreeWalkerMock).not.toHaveBeenCalled();
      expect(hightlightKeywordSpy).toHaveReturnedWith(undefined);
  
      service.hightlightKeyword(null as unknown as IKeyword);
      expect(createTreeWalkerMock).not.toHaveBeenCalled();
      expect(hightlightKeywordSpy).toHaveReturnedWith(undefined);
    });
  
    it('should not hightlight a keyword if it\'s name is falsy', () => {
      const hightlightKeywordSpy = jest.spyOn(service, 'hightlightKeyword');
      const createTreeWalkerMock = jest.fn();
      document.createTreeWalker = createTreeWalkerMock;
      createTreeWalkerMock.mockReturnValueOnce('mock return TreeWalker');
      const keyword = generateKeyword();
  
      const { name: _, ...newKeyword } = keyword; 
      service.hightlightKeyword(newKeyword as unknown as IKeyword);
      expect(createTreeWalkerMock).not.toHaveBeenCalled();
      expect(hightlightKeywordSpy).toHaveReturnedWith(undefined);
  
      keyword.name = '';
      service.hightlightKeyword(keyword);
      expect(createTreeWalkerMock).not.toHaveBeenCalled();
      expect(hightlightKeywordSpy).toHaveReturnedWith(undefined);
  
      keyword.name = undefined as unknown as string;
      service.hightlightKeyword(keyword);
      expect(createTreeWalkerMock).not.toHaveBeenCalled();
      expect(hightlightKeywordSpy).toHaveReturnedWith(undefined);
  
      keyword.name = null as unknown as string;
      service.hightlightKeyword(keyword);
      expect(createTreeWalkerMock).not.toHaveBeenCalled();
      expect(hightlightKeywordSpy).toHaveReturnedWith(undefined);
    });
  });

  it('should create TreeWorker', () => {
    const rootNode = document.body;
    const createTreeWalkerMock = jest.fn();
    document.createTreeWalker = createTreeWalkerMock;
    createTreeWalkerMock.mockReturnValueOnce('mock return value');
  
    service.createTreeWorker(rootNode);

    expect(createTreeWalkerMock).toHaveBeenCalledWith(
      rootNode,
      NodeFilter.SHOW_TEXT,
      service.config.customNodeFilter
    );
  });

  xdescribe('deHightlightKeyword', () => {
    let highlightedElement: HTMLDivElement;

    beforeEach(() => {
      highlightedElement = document.createElement('div');
      highlightedElement.textContent = LOREM_IPSUM;
      highlightedElement.className = 'text-to-highlight';
      document.body.appendChild(highlightedElement);
      fixture.detectChanges();
    });

    afterEach(() => {
      document.body.removeChild(highlightedElement);
    });

    // TODO: Find out why not have the text when hightlight and de-highlight
    it('should removes highlighted element when keyword matches', () => {
      const keyword = generateKeyword();
      const keywordArray = LOREM_IPSUM.replace(/[,.]/g, '').split(' ');
      const randomKeyword = keywordArray[Math.floor(Math.random() * keywordArray.length)];
      const keywordToHighlight: IKeyword = {
        ...keyword,
        name: randomKeyword
      };
      service.hightlightKeyword(keywordToHighlight);
      // service.deHightlightKeyword(keywordToHighlight);
      expect(document.querySelector(`.${defaultConfig.highlightClass}`)?.textContent).toBe("")
    });
  });
});
