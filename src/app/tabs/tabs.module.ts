import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
  NSEmptyOutletComponent,
} from "@nativescript/angular";

import { TabsComponent } from "./tabs.component";
import { TabsRoutingModule } from "./tabs-routing.module"

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    TabsRoutingModule,
  ],
  declarations: [TabsComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TabsModule {}
