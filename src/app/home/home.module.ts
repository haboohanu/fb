import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular'
import { HomeListComponent } from './home-list/home-list.component'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { ItemDetailComponent } from './item-detail/item-detail.component'

@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule, NativeScriptRouterModule],
  declarations: [HomeComponent, ItemDetailComponent, HomeListComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
