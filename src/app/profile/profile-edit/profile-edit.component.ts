import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";
import { ProfileModel } from "../../models/profile.model";
import { requestPermissions } from "@nativescript/camera";
import * as camera from "@nativescript/camera";
import { firebase } from "@nativescript/firebase-core";
import "@nativescript/firebase-auth";
import "@nativescript/firebase-firestore";

@Component({
  moduleId: module.id,
  selector: "ns-profile-edit",
  templateUrl: "profile-edit.component.html",
})
export class ProfileEditComponent {
  userProfile: ProfileModel;
  uid: string;
  profileForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private page: Page,
    private fb: FormBuilder
  ) {
    page.actionBarHidden = true;
  }

  ngOnInit(): void {
    this.uid = this.activatedRoute.snapshot.params.id;
    console.log(this.uid);
    this.getUserProfile(this.uid);
    this.createForm();
  }

  createForm() {
    this.profileForm = this.fb.group({
      name: [this.userProfile?.name],
      email: [this.userProfile?.email],
      avatar: [this.userProfile?.avatar],
      username: [this.userProfile?.username],
      phone: [this.userProfile?.phone],
      address: [this.userProfile?.address],
      city: [this.userProfile?.city],
      state: [this.userProfile?.state],
      country: [this.userProfile?.country],
      zipcode: [this.userProfile?.zipcode],
    });
  }

  onTapBack() {
    this.routerExtensions.back();
    //this.routerExtensions.navigate(['../tabs/default/profile']);
  }

  onEditPhoto() {
    requestPermissions().then(
      function success() {
        camera
          .takePicture()
          .then(function (imageAsset) {
            console.log("Result is an image asset instanc");
            //var image = new Image();
            this.userProfile.avatar = imageAsset;
            console.log(this.userProfile);
          })
          .catch(function (err) {
            console.log("Error -> " + err.message);
          });
      },
      function failure() {
        // permission request rejected
        // ... tell the user ...
      }
    );
  }

  onSave() {
    firebase()
      .firestore()
      .collection("users")
      .doc(this.uid)
      .update({
        address: this.profileForm.value.address,
        city: this.profileForm.value.city,
        country: this.profileForm.value.country,
        email: this.profileForm.value.email,
        name: this.profileForm.value.name,
        phone: this.profileForm.value.phone,
        state: this.profileForm.value.state,
        username: this.profileForm.value.username,
        zipcode: this.profileForm.value.zipcode
      })
      .then(() => {
        console.log("User updated!");
      });
  }

  getUserProfile(uid) {
    console.log("Get User:", uid);
    firebase()
      .firestore()
      .collection("users")
      .doc(uid)
      .get()
      .then((documentSnapshot) => {
        console.log("User exists: ", documentSnapshot.exists);

        if (documentSnapshot.exists) {
          let res = documentSnapshot.data();
          console.log("User data: ", res);
          let profile: ProfileModel = {
            name: res.name,
            email: res.email,
            avatar: "https://randomuser.me/api/portraits/men/75.jpg",
            username: res.username,
            phone: res.phone,
            address: res.address,
            city: res.city,
            state: res.state,
            country: res.country,
            zipcode: res.zipcode,
          };
          this.userProfile = profile;
        }
        this.createForm();
      });
  }
}
