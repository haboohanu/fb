import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { BrowseRoutingModule } from './browse-routing.module'
import { BrowseComponent } from './browse.component'
import { BrowsePageComponent } from './browse-page/browse-page.component'

@NgModule({
  imports: [NativeScriptCommonModule, BrowseRoutingModule],
  declarations: [BrowseComponent, BrowsePageComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BrowseModule {}
