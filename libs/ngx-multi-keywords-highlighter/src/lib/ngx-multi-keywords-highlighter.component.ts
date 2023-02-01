import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatChipInputEvent } from '@angular/material/chips';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import {
  IKeyword,
  LibConfig,
  // MATERIAL_COLOR,
  MultiKeywordsHighlighterConfig,
} from './core';
import { ICON_HIGHLIGHT, ICON_COLOR_LENS, ICON_CLEAR } from './material';
import { NgxMultiKeywordsHighlighterService } from './ngx-multi-keywords-highlighter.service';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'mkh-multi-keywords-highlighter',
  templateUrl: './ngx-multi-keywords-highlighter.component.html',
  styleUrls: ['./ngx-multi-keywords-highlighter.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxMultiKeywordsHighlighterComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

  /**
   * Output event for initialized event
   * @returns boolean
   */
  @Output() initialized: EventEmitter<boolean> = new EventEmitter<boolean>(
    false
  );

  /**
   * Output event for keywords list
   * @returns IKeyword[]
   */
  @Output() keywordListOutput: EventEmitter<IKeyword[]> = new EventEmitter<
    IKeyword[]
  >();

  /**
   * Output event for highlighted status
   * @returns boolean
   */
  @Output() highlighted: EventEmitter<boolean> = new EventEmitter<boolean>(
    false
  );

  /**
   * Output event for on Open Menu
   * @returns boolean
   */
  @Output() openMenu: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  /**
   * Output event for on Close Menu
   * @returns boolean
   */
  @Output() closeMenu: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  /**
   * Copyright year
   */
  readonly currentYear: Date = new Date();

  /**
   * Separator keys codes
   */
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  /**
   * Keyword quantity shows on badge
   */
  private keywordQuantitySubject = new BehaviorSubject<number>(0);
  keywordQuantity$ = this.keywordQuantitySubject.asObservable();

  constructor(
    private readonly mkhService: NgxMultiKeywordsHighlighterService,
    private readonly iconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconLiteral(
      'highlight',
      sanitizer.bypassSecurityTrustHtml(ICON_HIGHLIGHT)
    );
    iconRegistry.addSvgIconLiteral(
      'color_lens',
      sanitizer.bypassSecurityTrustHtml(ICON_COLOR_LENS)
    );
    iconRegistry.addSvgIconLiteral(
      'clear',
      sanitizer.bypassSecurityTrustHtml(ICON_CLEAR)
    );
  }
  ngOnInit(): void {
    this.initialized.emit(true);
  }

  /**
   * Copyright
   */
  get copyright(): string {
    return LibConfig.COPYRIGHT_AUTHOR;
  }

  /**
   * Copyright link
   */
  get copyrightLink(): string {
    return LibConfig.COPYRIGHT_CONTACT;
  }

  /**
   * Library name
   */
  get appName(): string {
    return LibConfig.APP_NAME;
  }

  /**
   * Library version
   */
  get appVersion(): string {
    return LibConfig.APP_VERSION;
  }

  /**
   * Library configuration
   */
  get config(): MultiKeywordsHighlighterConfig {
    return this.mkhService.config;
  }

  /**
   * Highlighted stauts text
   */
  get highlightedStautsText$(): Observable<string> {
    return this.mkhService.highlightedStatusText$;
  }

  /**
   * Highlight status
   */
  get highlightStauts$(): Observable<boolean> {
    return this.mkhService.highlightedStatus$;
  }

  /**
   * Keyword list
   */
  get keywordList$(): Observable<IKeyword[]> {
    return this.mkhService.localKeywords$;
  }

  /**
   * Keyword counter
   */
  get keywordCount$(): Observable<number> {
    return this.mkhService.localKeywords$.pipe(
      switchMap((data) => of(data.length))
    );
  }

  /**
   * On keywords highlighter opened event
   */
  onOpened(): void {
    this.openMenu.emit(true);
  }

  /**
   * On keywords highlighter closed event
   */
  onClosed(): void {
    this.closeMenu.emit(true);
  }

  /**
   * On check the highlighter checkbox
   * @param event MatSlideToggleChange
   */
  onToggle(event: MatSlideToggleChange): void {
    this.mkhService.toggleHighlightStatus(event.checked);
    this.mkhService.toggleHighlighter();
    this.highlighted.emit(event.checked);
    // BUG: this.config is READONLY, Need to create a method to update the config.
    // event.checked
    //   ? (this.config.themeColor = MATERIAL_COLOR.ACCENT)
    //   : (this.config.themeColor = MATERIAL_COLOR.PRIMARY);
  }

  trackById(index: number, keyword: IKeyword): number | undefined {
    return keyword?.id;
  }

  /**
   * Add a keyword
   * @param event MatChipInputEvent
   */
  addKeyword(event: MatChipInputEvent): void {
    const chipInput = event.chipInput;
    const chipValue = event.value;
    if (chipValue) {
      const newKeyword: IKeyword = {
        name: chipValue.trim(),
        color: this.getRandomColor(),
        createdAt: new Date().toUTCString(),
      };

      this.mkhService.addKeyword(newKeyword);
      this.keywordListOutput.emit(this.mkhService.localKeywords);

      // Reset the input value
      if (chipInput) {
        chipInput.clear();
      }
    }
  }

  /**
   * Remove a keyword from the list
   * @param keyword Keyword to remove
   */
  removeKeyword(keyword: IKeyword): void {
    this.mkhService.removeKeyword(keyword);
    this.keywordListOutput.emit(this.mkhService.localKeywords);
  }

  /**
   * Get a random color from the color palette
   */
  private getRandomColor(): string {
    return this.config.colorPalette[
      Math.floor(Math.random() * this.config.colorPalette.length)
    ];
  }
}
