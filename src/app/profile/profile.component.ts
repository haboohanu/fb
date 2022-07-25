import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";
import { ProfileService } from "../services/profile.service";
import { ProfileModel } from "../models/profile.model";
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
  selector: "ns-profile",
  templateUrl: "profile.component.html",
})
export class ProfileComponent {
  uid: string = '';

  constructor(
    private routerExtensions: RouterExtensions,
    private page: Page,
    private profileService: ProfileService
  ) {
    page.actionBarHidden = true;
  }

  userProfile: ProfileModel | undefined = undefined;
  items = items;

  ngOnInit(): void {
  }

}
