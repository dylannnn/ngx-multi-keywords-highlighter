import {
  LABEL_POSITION,
  MATERIAL_COLOR,
  provideNgxMultiKeywordsHighlighter,
} from '@amfrontender/ngx-multi-keywords-highlighter';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DynamicComponent } from './dynamic-component/dynamic.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    // NgxMultiKeywordsHighlighterModule.forRoot({
    //   themeColor: MATERIAL_COLOR.PRIMARY,
    //   enableToggleLabel: true,
    //   toggleLabelPosition: LABEL_POSITION.BEFORE,
    //   enableHighlighterTooltip: 'Turn on/off highlighter',
    //   minWidth: 320,
    //   appRoot: 'mkh-root',
    // }),
    NavBarComponent,
    DemoComponent,
    DynamicComponent,
  ],
  providers: [
    provideNgxMultiKeywordsHighlighter({
      themeColor: MATERIAL_COLOR.PRIMARY,
      enableToggleLabel: true,
      toggleLabelPosition: LABEL_POSITION.BEFORE,
      enableHighlighterTooltip: 'Turn on/off highlighter',
      minWidth: 320,
      appRoot: 'mkh-root',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
