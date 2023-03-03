import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MultiKeywordsHighlighterConfig,
  MULTI_KEYWORDS_HIGHLIGHTER_CONFIG_TOKEN,
} from './core';
import { MaterialComponentsModule } from './material';
import { NgxMultiKeywordsHighlighterComponent } from './ngx-multi-keywords-highlighter.component';

@NgModule({
  declarations: [NgxMultiKeywordsHighlighterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
  ],
  exports: [NgxMultiKeywordsHighlighterComponent],
})
export class NgxMultiKeywordsHighlighterModule {
  constructor(
    @Optional() @SkipSelf() parentModule?: NgxMultiKeywordsHighlighterModule
  ) {
    if (parentModule) {
      throw new Error(
        'NgxMultiKeywordsHighlighterModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(
    config: Partial<MultiKeywordsHighlighterConfig>
  ): ModuleWithProviders<NgxMultiKeywordsHighlighterModule> {
    return {
      ngModule: NgxMultiKeywordsHighlighterModule,
      providers: [
        {
          provide: MULTI_KEYWORDS_HIGHLIGHTER_CONFIG_TOKEN,
          useValue: config,
        },
      ],
    };
  }
}
