import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { SearchPageComponent } from "./search-page/search-page.component";

import { SearchComponent } from "./search.component";

const routes: Routes = [
  {
    path: "",
    component: SearchComponent,
    children: [
      {
        path: "",
        component: SearchPageComponent,
      },

    ],
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class SearchRoutingModule {}
