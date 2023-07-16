import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject, filter, take } from 'rxjs';
import { IKeyword, NgxMultiKeywordsHighlighterComponent } from '@amfrontender/ngx-multi-keywords-highlighter';

@Component({
    selector: 'mkh-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatButtonModule, NgxMultiKeywordsHighlighterComponent, RouterOutlet, MatIconModule]
})
export class NavBarComponent implements OnInit {
  private showHighlighterSubject = new BehaviorSubject(false);
  showHighlighter$ = this.showHighlighterSubject.asObservable();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.resetShowHighlighter();
  }

  resetShowHighlighter() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      take(1)
    ).subscribe({
      next: (onNavigationEnd) => {
        const navigationEndEvent = onNavigationEnd as unknown as NavigationEnd;
        const mkhOutletsURLRegex = new RegExp(/(multi-keywords-highlighter:lib-experimental)/g);
        const onMkhOutletURL = mkhOutletsURLRegex.test(navigationEndEvent.url);
        this.showHighlighterSubject.next(onMkhOutletURL);
      }
    });
  }

  onKeywordListOutput(emitEvent: IKeyword[]): void {
    console.log('[DEMO] ON keywordListOutput: ', emitEvent);
  }

  toggleLib(): void {
    this.showHighlighterSubject.next(!this.showHighlighterSubject.value);

    this.showHighlighter$.pipe(
      take(1)
    ).subscribe({
      next: (status) => {
        if (!status) {
          this.clearNavigationOutlet();
        } else {
          this.router.navigate([{ outlets: { 'multi-keywords-highlighter': ['lib-experimental'] }}]);
        }
      },
      error: () => {
        this.clearNavigationOutlet();
      }
    });
  }

  clearNavigationOutlet(): void {
    this.router.navigate([
      { outlets: { 'multi-keywords-highlighter': null } },
    ]);
  }
}
