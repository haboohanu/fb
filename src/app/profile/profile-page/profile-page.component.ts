import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";
import { ProfileService } from "../../services/profile.service";
import { ProfileModel } from "../../models/profile.model";
import { firebase } from "@nativescript/firebase-core";
import "@nativescript/firebase-auth";
import "@nativescript/firebase-firestore";

const arrow = "~/app/assets/chevron.png";

const items = new Array<any>(
  { name: "fill", color: "#f5f5f5" },
  { name: "Search History", arrow: arrow, color: "white" },
  { name: "Appointment History", arrow: arrow, color: "white" },
  { name: "Payment History", arrow: arrow, color: "white" },
  { name: "fill", color: "#f5f5f5" },
  {
    name: "Terms & Conditions",
    endpoint: "profile/terms",
    arrow: arrow,
    color: "white",
  },
  { name: "Help", arrow: arrow, color: "white" },
  { name: "Privacy Policy", arrow: arrow, color: "white" },
  { name: "fill", color: "#f5f5f5" },
  { name: "Sign Out", arrow: arrow, color: "white", event: "onSignOut" },
  { name: "fill", color: "#f5f5f5" }
);

@Component({
  moduleId: module.id,
  selector: "ns-profile-page",
  templateUrl: "profile-page.component.html",
})
export class ProfilePageComponent {
  uid: string = "";

  constructor(
    private routerExtensions: RouterExtensions,
    private page: Page,
    private profileService: ProfileService
  ) {
    page.actionBarHidden = true;

    this.page.on(Page.navigatingToEvent, ()=>{
      console.log("navigating to this page");
      this.getUserProfile();
  })
  }

  userProfile: ProfileModel | undefined = undefined;
  items = items;

  ngOnInit(): void {
    this.getCurrentUserId().then(() => {
      this.getUserDocument(this.uid);
    });

    firebase()
      .firestore()
      .collection("users")
      .onSnapshot(
        (snapshot) => {
          console.log("Got Users collection result.");
        },
        (error) => {
          console.error(error);
        }
      );
  }

  getUserProfile() {
    this.getCurrentUserId().then(() => {
      this.getUserDocument(this.uid);
    });
  }

  async getCurrentUserId(): Promise<string> {
    let id = await new Promise<string>((resolve, reject) => {
      firebase()
        .auth()
        .addAuthStateChangeListener((user) => {
          if (user) {
            console.log(`${user} is currently signed in`);
            this.uid = user.uid;
            resolve(user.uid);
          } else {
            reject();
          }
        });
    });
    return id;
  }

  getUserDocument(uid: string) {
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
      });
  }

  onTapSettings(event) {
    console.log("tapped");
  }

  onSignOut() {
    firebase().auth().signOut();

    this.routerExtensions.navigate(["login"]);
  }

  onTapNavigate(endpoint: String) {
    this.routerExtensions.navigate([endpoint]);
  }
}
