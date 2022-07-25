import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";

@Component({
  moduleId: module.id,
  selector: "tabs-page",
  templateUrl: "./tabs.component.html",
})
export class TabsComponent {
  constructor(
    private routerExtension: RouterExtensions,
    private activeRoute: ActivatedRoute,
    private page: Page,
    ) {
      page.actionBarHidden = true;
    }

  ngOnInit() {
    this.routerExtension.navigate(
      [{
          outlets: {
            homeTab: ["home"],
            browseTab: ["browse"],
            searchTab: ["search"],
            profileTab: ["profile"],
          },
        }],
      { relativeTo: this.activeRoute }
    );
  }
}
