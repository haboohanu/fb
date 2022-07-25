import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent,
} from "@nativescript/angular";
import { TabsComponent } from "./tabs.component";

const routes: Routes = [
  {
    path: "default",
    component: TabsComponent,
    children: [
      {
        path: "home",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
          import("../home/home.module").then((m) => m.HomeModule),
        outlet: "homeTab",
      },
      {
        path: "browse",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
          import("../browse/browse.module").then((m) => m.BrowseModule),
        outlet: "browseTab",
      },
      {
        path: "search",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
          import("../search/search.module").then((m) => m.SearchModule),
        outlet: "searchTab",
      },
      {
        path: "profile",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
          import("../profile/profile.module").then((m) => m.ProfileModule),
        outlet: "profileTab",
      },
    ],
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class TabsRoutingModule {}
