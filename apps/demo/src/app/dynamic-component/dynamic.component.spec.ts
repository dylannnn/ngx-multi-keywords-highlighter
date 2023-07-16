import { MULTI_KEYWORDS_HIGHLIGHTER_CONFIG_TOKEN, MATERIAL_COLOR, LABEL_POSITION } from '@amfrontender/ngx-multi-keywords-highlighter';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { Info } from '../shared/info.class';

import { DynamicComponent } from './dynamic.component';

describe('DynamicComponent', () => {
  let component: DynamicComponent;
  let fixture: ComponentFixture<DynamicComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [DynamicComponent, NoopAnimationsModule],
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
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
