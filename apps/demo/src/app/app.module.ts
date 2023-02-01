import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgxMultiKeywordsHighlighterModule, MATERIAL_COLOR, LABEL_POSITION } from '@amfrontender/ngx-multi-keywords-highlighter';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxMultiKeywordsHighlighterModule.forRoot({
      themeColor: MATERIAL_COLOR.PRIMARY,
      enableToggleLabel: true,
      toggleLabelPosition: LABEL_POSITION.BEFORE,
      enableHighlighterTooltip: 'Turn on/off highlighter',
      minWidth: 320,
      appRoot: 'mkh-root',
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
