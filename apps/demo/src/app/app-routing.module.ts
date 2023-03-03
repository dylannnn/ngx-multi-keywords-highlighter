import {
  LABEL_POSITION,
  MATERIAL_COLOR,
  NgxMultiKeywordsHighlighterComponent,
} from '@amfrontender/ngx-multi-keywords-highlighter';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
// import { NgxMultiKeywordsHighlighterComponent } from '@ngx-multi-keywords-highlighter';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full',
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
  // Demo for lazyloading library
  {
    path: 'lib-experimental',
    // IF not loaded via AppModule, then can be loaded here.
    // loadChildren: () => import('@amfrontender/ngx-multi-keywords-highlighter').then(m => {
    //   m.NgxMultiKeywordsHighlighterModule.forRoot({
    //     themeColor: MATERIAL_COLOR.PRIMARY,
    //     enableToggleLabel: true,
    //     toggleLabelPosition: LABEL_POSITION.BEFORE,
    //     enableHighlighterTooltip: 'Turn on/off highlighter',
    //     // linkToCopyright: false,
    //     minWidth: 320
    //   })
    //   return m.NgxMultiKeywordsHighlighterModule;
    // }),
    outlet: 'multi-keywords-highlighter',
    component: NgxMultiKeywordsHighlighterComponent,
  },
  {
    path: '**',
    redirectTo: 'demo',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
