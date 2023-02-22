import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IKeyword } from '@amfrontender/ngx-multi-keywords-highlighter';
import { BehaviorSubject, filter, take } from 'rxjs';

@Component({
  selector: 'mkh-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
