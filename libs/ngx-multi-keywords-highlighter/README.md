# NG Multi Keywords Highlighter Workspace

![main](https://img.shields.io/travis/dylannnn/ng-multi-keywords-highlighter-workspace/main?label=main&logo=github)
![develop](https://img.shields.io/travis/dylannnn/ng-multi-keywords-highlighter-workspace/develop?label=develop&logo=github)
![CircleCI](https://img.shields.io/circleci/build/github/dylannnn/ng-multi-keywords-highlighter-workspace?logo=circleci)
[![Angular](https://img.shields.io/badge/11.2.1-dd0031.svg?style=flat&logo=angular)](https://angular.io/)
[![codecov](https://codecov.io/gh/dylannnn/ng-multi-keywords-highlighter-workspace/branch/main/graph/badge.svg?token=y3SsiijLVp)](https://codecov.io/gh/dylannnn/ng-multi-keywords-highlighter-workspace)
[![codecov](https://codecov.io/gh/dylannnn/ng-multi-keywords-highlighter-workspace/branch/develop/graph/badge.svg?token=y3SsiijLVp)](https://codecov.io/gh/dylannnn/ng-multi-keywords-highlighter-workspace)
![npm](https://img.shields.io/npm/v/@amfrontender/ng-multi-keywords-highlighter?logo=npm)
![GitHub](https://img.shields.io/github/license/dylannnn/ng-multi-keywords-highlighter-workspace)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/dylannnn/ng-multi-keywords-highlighter-workspace)
![GitHub package.json version](https://img.shields.io/github/package-json/v/dylannnn/ng-multi-keywords-highlighter-workspace)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/dylannnn/ng-multi-keywords-highlighter-workspace)
[![Known Vulnerabilities](https://snyk.io/test/github/dylannnn/ng-multi-keywords-highlighter-workspace/badge.svg?targetFile=projects/ng-multi-keywords-highlighter/package.json)](https://snyk.io/test/github/dylannnn/ng-multi-keywords-highlighter-workspace?targetFile=projects/multi-keywords-highlighter/package.json)

NG Multi Keywords Highlighter is an Angular library that build together with Angular material.

It's create a fun way for searching an Angular web page for the interesting bits by input a keyword or a keyword list. This library could be assistive for searching heavy data page [ At least for me :) ].

Once you have input the keyword list, Multi Keywords Highlighter shows them to you instantly through beautiful and colorful highlighters (you could also customize the color palette). In addition, is also able to point out to you the number of matches on the current web page.

We all concern about our privacy or anonymity, the keywords are stored locally so you shouldn't worry it.

An authentication feature will be developed in a later stage to store encrypted keywords in the cloud if you agree with it, only you can access to it.

## How to use

### Install Required Peer Dependencies

`npm install @amfrontender/ngx-multi-keywords-highlighter`

### Usage

#### Use pre-defined theme

Add to your angular.json build target

"styles": [
"@amfrontender/ngx-multi-keywords-highlighter/src/styles/index.scss",
...
]

#### Use custom theme

Add below scss to your global scss file. You can customize Angular Material themes freely. View this link to [Defining a custom theme](https://material.angular.io/guide/theming#defining-a-custom-theme)

```scss
/* You can add global styles to this file, and also import other style files */
@use '@angular/material' as mat;
@use 'sass:map';

// Include non-theme styles for core.
@include mat.core();

// Define the palettes for your theme using the Material Design palettes available in palette.scss
// (imported above). For each palette, you can optionally specify a default, lighter, and darker
// hue. Available color palettes: https://material.io/design/color/
$ng-material-primary: mat.define-palette(mat.$indigo-palette);
$ng-material-accent: mat.define-palette(mat.$pink-palette, A200, A100, A400);

// The warn palette is optional (defaults to red).
$ng-material-warn: mat.define-palette(mat.$red-palette);

// Create the theme object. A theme consists of configurations for individual
// theming systems such as "color" or "typography".
$ng-material-theme: mat.define-light-theme(
  (
    color: (
      primary: $ng-material-primary,
      accent: $ng-material-accent,
      warn: $ng-material-warn,
    ),
  )
);

// Include theme styles for core and each component used in your app.
// Alternatively, you can import and @include the theme mixins for each component
// that you are using.
@include mat.all-component-themes($ng-material-theme);

html,
body {
  height: 100%;
}
body {
  margin: 0;
  font-family: Roboto, 'Helvetica Neue', sans-serif;
}
```

Add below html to your index.html `<head>` tag.

Option

```html
<link
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
  rel="stylesheet"
/>
```

Required

```html
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
```

Import `NgxMultiKeywordsHighlighterModule` to your `app.module.ts`

```typescript
import { MATERIAL_COLOR, NgxMultiKeywordsHighlighterModule } from '@amfrontender/ngx-multi-keywords-highlighter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
...

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgxMultiKeywordsHighlighterModule.forRoot({
      themeColor: MATERIAL_COLOR.PRIMARY
    })
    ...
  ],
  ...
```

## Roadmap

- [x] Search
- [x] Highlight
- [ ] Unit test
- [ ] E2E test
- [ ] Save to localstorage
- [ ] Themes
- [ ] CI/CD Release
- [ ] Deploy demo, documents to Firebase
- [x] Compodoc Documentation
- [x] Storybook

## Issues?

If you have any issues, suggestions, welcome to create an issue in the Github. (Follow a standard guideline)

## Contribute

We like open source, so let's build it together.

## At the End

If you love it, you can [support me](https://www.buymeacoffee.com/yunfeili)!
