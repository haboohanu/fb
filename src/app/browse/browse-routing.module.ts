import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { BrowsePageComponent } from './browse-page/browse-page.component'

import { BrowseComponent } from './browse.component'

const routes: Routes = [
  {
    path: "",
    component: BrowseComponent,
    children: [
      {
        path: "",
        component: BrowsePageComponent,
      },

    ],
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class BrowseRoutingModule {}
