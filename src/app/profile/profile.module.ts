import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptRouterModule } from '@nativescript/angular'
import { ProfileRoutingModule } from './profile-routing.module'
import { ProfileComponent } from './profile.component'
import { ProfilePageComponent } from './profile-page/profile-page.component'
import { ProfileEditComponent } from './profile-edit/profile-edit.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [NativeScriptCommonModule, ProfileRoutingModule, NativeScriptRouterModule, ReactiveFormsModule, NativeScriptFormsModule],
  declarations: [ProfileComponent, ProfilePageComponent, ProfileEditComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProfileModule {}
