import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { IKeyword } from '@amfrontender/ngx-multi-keywords-highlighter';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  initHighlighter = false;
  showHighlighter = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const children = this.activatedRoute.children;
    children.forEach((child) => {
      if (child.outlet !== 'primary') {
        this.router.navigate([
          { outlets: { 'multi-keywords-highlighter': null } },
        ]);
      }
    });
  }

  // ngAfterContentChecked(): void {
  //   const children = this.activatedRoute.children;
  //   children.forEach(child => {
  //     console.log('After ngAfterContentChecked :', child.outlet);
  //     if (child.outlet !== 'primary' && !this.initHighlighter) {
  //       this.router.navigate([{ outlets: { 'multi-keywords-highlighter': null }}]);
  //     }
  //   });
  // }

  onKeywordListOutput(emitEvent: IKeyword[]): void {
    console.log('[DEMO] ON keywordListOutput: ', emitEvent);
  }

  toggleLib(): void {
    this.showHighlighter = !this.showHighlighter;
    if (!this.showHighlighter) {
      this.router.navigate([
        { outlets: { 'multi-keywords-highlighter': null } },
      ]);
    }
  }
}
