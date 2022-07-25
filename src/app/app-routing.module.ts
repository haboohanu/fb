import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent,
} from "@nativescript/angular";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
      path: "login", component: LoginComponent
  },
  {
    path: "register", component: RegisterComponent
},
  {
      path: "tabs",
      loadChildren: () => import("~/app/tabs/tabs.module").then(m => m.TabsModule),
  },
  // {
  //   path: '',
  //   redirectTo: '/(homeTab:home/default//browseTab:browse/default//searchTab:search/default)',
  //   pathMatch: 'full',
  // },
  //{ path: "", redirectTo: "/login", pathMatch: "full" },
  // { path: "", redirectTo: "/(login:login)", pathMatch: "full" },
  // {
  //   path: "login",
  //   component: LoginComponent,
  //   loadChildren: () =>
  //     import("~/app/login/login.module").then((m) => m.LoginModule),
  //   outlet: "login",
  // },
  // {
  //   path: "home",
  //   component: NSEmptyOutletComponent,
  //   loadChildren: () =>
  //     import("~/app/home/home.module").then((m) => m.HomeModule),
  //   outlet: "homeTab",
  // },
  // {
  //   path: "browse",
  //   component: NSEmptyOutletComponent,
  //   loadChildren: () =>
  //     import("~/app/browse/browse.module").then((m) => m.BrowseModule),
  //   outlet: "browseTab",
  // },
  // {
  //   path: "search",
  //   component: NSEmptyOutletComponent,
  //   loadChildren: () =>
  //     import("~/app/search/search.module").then((m) => m.SearchModule),
  //   outlet: "searchTab",
  // },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
