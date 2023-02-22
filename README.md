# NgxMultiKeywordsHighlighterWorkspace

[![ngx-multi-keywords-highlighter-e2e](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/2dbycs&style=flat&logo=cypress)](https://cloud.cypress.io/projects/2dbycs/runs)

## How to use

Add `"node_modules/@amfrontender/ngx-multi-keywords-highlighter/themes/index.scss"` or `"node_modules/@amfrontender/ngx-multi-keywords-highlighter/themes/themes.scss"` to your angular.json to the build options of styles.

Import the `NgxMultiKeywordsHighlighterModule` to your app.module.ts

```typescript
import { LABEL_POSITION, MATERIAL_COLOR, NgxMultiKeywordsHighlighterModule } from '@amfrontender/ngx-multi-keywords-highlighter';
```

Add `NgxMultiKeywordsHighlighterModule` config to the imports

```typescript
@NgModule({
  declarations: [...],
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
    }),
    ...
  ],
  providers: [...],
  bootstrap: [...],
})
export class AppModule {}
```

Add selector to the html

```html
<mkh-multi-keywords-highlighter class="custom-lib"></mkh-multi-keywords-highlighter>
```

For more advanced usages, please check the storybook or the demo app
