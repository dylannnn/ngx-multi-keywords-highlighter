import { MULTI_KEYWORDS_HIGHLIGHTER_CONFIG_TOKEN, MATERIAL_COLOR, LABEL_POSITION } from '@amfrontender/ngx-multi-keywords-highlighter';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [NavBarComponent, NoopAnimationsModule],
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
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
