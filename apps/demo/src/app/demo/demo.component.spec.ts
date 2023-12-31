import {
  LABEL_POSITION,
  MATERIAL_COLOR,
  MULTI_KEYWORDS_HIGHLIGHTER_CONFIG_TOKEN,
} from '@amfrontender/ngx-multi-keywords-highlighter';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, DemoComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: MULTI_KEYWORDS_HIGHLIGHTER_CONFIG_TOKEN,
          useValue: {
            themeColor: MATERIAL_COLOR.PRIMARY,
            enableToggleLabel: true,
            toggleLabelPosition: LABEL_POSITION.BEFORE,
            enableHighlighterTooltip: 'Turn on/off highlighter',
            minWidth: 320,
            appRoot: 'mkh-root',
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
