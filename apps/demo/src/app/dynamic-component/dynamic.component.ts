import { Component } from '@angular/core';
import { IKeyword, NgxMultiKeywordsHighlighterComponent } from '@amfrontender/ngx-multi-keywords-highlighter';
// import { Info } from '../shared/info.class';

@Component({
    selector: 'mkh-dynamic',
    templateUrl: './dynamic.component.html',
    styleUrls: ['./dynamic.component.scss'],
    standalone: true,
    imports: [NgxMultiKeywordsHighlighterComponent]
})
export class DynamicComponent {
  // constructor(private info: Info) {}

  onKeywordListOutput(emitEvent: IKeyword[]): void {
    console.log('[Dynamic] ON keywordListOutput: ', emitEvent);
  }
}
