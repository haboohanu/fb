import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";
import { firebase } from "@nativescript/firebase-core";
import "@nativescript/firebase-auth";
import { User, UserCredential } from "@nativescript/firebase-auth";

@Component({
  moduleId: module.id,
  selector: "ns-login",
  templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User = null;
  //@ViewChild("CB1") CheckBox: ElementRef;


  constructor(
    private routerExtensions: RouterExtensions,
    private fb: FormBuilder,
    private page: Page,
  ) {
    page.actionBarHidden = true;
    this.createForm();
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  onBack() {
    this.routerExtensions.navigate(["home"]);
  }

  onLogin() {
    console.log(
      this.loginForm.get("email")?.value,
      this.loginForm.get("password")?.value
    );
    //this.getCheckProp();
    this.routerExtensions.navigate(["home"]);
  }

  onSignIn(){
    firebase()
    .auth()
    //.signInAnonymously()
    .signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
    .then((cred: UserCredential) => {
      console.log("UserCreds:", cred);
      this.routerExtensions.navigate(['tabs/default'])
    });
  }

  onRegister() {
    this.routerExtensions.navigate(["register"]);
  }

  log(){
    this.routerExtensions.navigate(['tabs/default'])
  }
  // getCheckProp() {
  //   console.log("checked prop value = " + this.CheckBox.nativeElement.checked);
  // }
}
