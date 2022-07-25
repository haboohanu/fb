import { HttpClientModule } from '@angular/common/http'
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, ReactiveFormsModule, NativeScriptFormsModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
