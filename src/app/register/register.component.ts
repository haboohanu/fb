import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-firestore';
import "@nativescript/firebase-auth";
import { UserCredential } from "@nativescript/firebase-auth";

@Component({
  moduleId: module.id,
  selector: "ns-register",
  templateUrl: "register.component.html",
})
export class RegisterComponent {

  registerForm: FormGroup;
  users = firebase().firestore().collection('users');
  auth = firebase().auth();

  constructor(
    private routerExtensions: RouterExtensions,
    private fb: FormBuilder,
    private page: Page
  ) {
    this.createForm();
    page.actionBarHidden = true;
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      firstName: ["", ],
      lastName: ["", ],
      username: ["", ],
      phone: ["", ],
      address: ["", ],
      city: ["", ],
      state: ["", ],
      country: ["", ],
      zipcode: ["", ],
      email: ["", ],
      password: ["", ],
      confirmPassword: ["", ],
    });
  }

  onSubmit() {
    console.log(
      this.registerForm.get("email").value,
      this.registerForm.get("password").value
    );

    this.createUserCred();
  }

  onLogin() {
    this.routerExtensions.navigate(["login"]);
  }

  onBack() {
    this.routerExtensions.navigate(["home"]);
  }

  createUserCred(){
    this.auth.createUserWithEmailAndPassword(this.registerForm.get("email")?.value, this.registerForm.get("password")?.value)
    .then((cred: UserCredential) => {
      console.log("UserCreds:", cred);
      this.createUserDocument(cred.user.uid);
      this.routerExtensions.navigate(['tabs/default'])})
    .catch((error) => {console.log("Create Error: ", error)});
  }

  createUserDocument(id: string){
    this.users
    .doc(id)
    .set({
      address: this.registerForm.get("address").value,
      city: this.registerForm.get("city").value,
      country: this.registerForm.get("country").value,
      email: this.registerForm.get("email").value,
      firstName: this.registerForm.get("firstName").value,
      lastName: this.registerForm.get("lastName").value,
      phone: this.registerForm.get("phone").value,
      state: this.registerForm.get("state").value,
      username: this.registerForm.get("username").value,
      zipcode: this.registerForm.get("zipcode").value,
    })
    .then((value) => console.log('User Added: ', value))
    .catch((error) => console.error('Failed to add user:', error));
  }


}
