# Ngx Multi Keywords Highlighter Workspace

![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)
![npm (scoped)](https://img.shields.io/npm/v/%40amfrontender/ngx-multi-keywords-highlighter)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dylannnn/ngx-multi-keywords-highlighter)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Project Overview

Bored with the browser build-in search that hightlight the keyword? Missing a feature that highlight multiple keywords? This is the Ngx Multi Keywords Highlighter! This library provides a simple and intuitive way to highlight multiple keywords with different colors in your Angular applications. This library is designed to be easy to integrate into your existing projects, allowing you to focus on building amazing features without worrying about the underlying implementation details.

![NGX Multi Keywords Highlighter](https://github.com/dylannnn/ngx-multi-keywords-highlighter/blob/main/tools/assets/multi-keywords-highlighter.png "NGX Multi Keywords Highlighter")

## Features

- Multi-keyword highlighting: Highlight multiple keywords in your text content using a variety of colors.
- Customizable colors: Choose from a range of pre-defined colors or define your own custom colors to match your application's branding.
- Easy integration: Simply install and import the library into your Angular project, and you're ready to start highlighting!
- Flexibility: Supports customization for multiple keywords highlight colors, thems.

## Getting Started

To get started with this project, follow these steps:

- Install the library using npm or yarn: `npm install @amfrontender/ngx-multi-keywords-highlighter`
- Import the library and config for your Angular project:

1. Add `"node_modules/@amfrontender/ngx-multi-keywords-highlighter/themes/index.scss"` or `"node_modules/@amfrontender/ngx-multi-keywords-highlighter/themes/themes.scss"` to your `angular.json` or `project.json` if you use NX to the build options of styles.

2. Import the `NgxMultiKeywordsHighlighterModule` to your `app.module.ts`

    ```typescript
    import { LABEL_POSITION, MATERIAL_COLOR, NgxMultiKeywordsHighlighterModule } from '@amfrontender/ngx-multi-keywords-highlighter';
    ```

3. Add `NgxMultiKeywordsHighlighterModule` config to the imports

    ```typescript
    @NgModule({
      declarations: [...],
      providers: [
        provideAnimations(),
        importProvidersFrom(
          NgxMultiKeywordsHighlighterModule.forRoot({
            themeColor: MATERIAL_COLOR.ACCENT,
            enableToggleLabel: true,
            toggleLabelPosition: LABEL_POSITION.BEFORE,
            enableHighlighterTooltip: 'On/Off',
            linkToCopyright: true,
            minWidth: 320,
            appRoot: storyRoot,
          }),
        ),
      ],
      bootstrap: [...],
    })
    export class AppModule {}
    ```

4. Add the lib tag to your component html

    ```html
    <mkh-multi-keywords-highlighter class="custom-lib"></mkh-multi-keywords-highlighter>
    ```

For more advanced usages, please check the storybook for the library or the demo app

## Development/Contribution

TBD

### Semantic Commits

<!-- prettier-ignore-start -->
| Type     | Notes                                                                                                   |
|----------|---------------------------------------------------------------------------------------------------------|
| build    | Changes that affect the build system or external dependencies                                           |
| chore    | Changes to the build process, release or auxiliary tools and libraries such as documentation generation |
| ci       | Changes to our CI configuration files and scripts                                                       |
| docs     | Documentation only changes                                                                              |
| feat     | A new feature                                                                                           |
| fix      | A bug fix                                                                                               |
| perf     | A code change that improves performance                                                                 |
| refactor | A refactoring                                                                                           |
| revert   | A revert commit                                                                                         |
| style    | UI/UX CHANGES                                                                                           |
| test     | Adding missing tests                                                                                    |
<!-- prettier-ignore-end -->

## License

The Library is released under the MIT License. See [LICENSE](LICENSE) for more information.

## Contact

If you have any questions, need help with integration, or want to discuss new features, please don't hesitate to open an Issue from github repository.
