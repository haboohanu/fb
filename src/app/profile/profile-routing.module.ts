import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { ProfileEditComponent } from './profile-edit/profile-edit.component'
import { ProfilePageComponent } from './profile-page/profile-page.component'
import { ProfileComponent } from './profile.component'

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '', component: ProfilePageComponent,
      },
      {
          path: 'edit/:id', component: ProfileEditComponent,
      },
    ],
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class ProfileRoutingModule {}
