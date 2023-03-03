import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMultiKeywordsHighlighterModule } from './ngx-multi-keywords-highlighter.module';
import { NgxMultiKeywordsHighlighterComponent } from './ngx-multi-keywords-highlighter.component';
import { MATERIAL_COLOR, LABEL_POSITION } from './core';

describe('NgxMultiKeywordsHighlighterComponent', () => {
  let component: NgxMultiKeywordsHighlighterComponent;
  let fixture: ComponentFixture<NgxMultiKeywordsHighlighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxMultiKeywordsHighlighterComponent],
      imports: [
        BrowserAnimationsModule,
        NgxMultiKeywordsHighlighterModule.forRoot({
          themeColor: MATERIAL_COLOR.ACCENT,
          enableToggleLabel: true,
          toggleLabelPosition: LABEL_POSITION.AFTER,
          enableHighlighterTooltip: 'OPEN/CLOSE',
          linkToCopyright: true,
          minWidth: 320,
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMultiKeywordsHighlighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
