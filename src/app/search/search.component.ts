import { Component, OnInit } from "@angular/core";
import { Page } from "@nativescript/core";

@Component({
  selector: "Search",
  templateUrl: "./search.component.html",
})
export class SearchComponent implements OnInit {
  constructor(private page: Page) {
    page.actionBarHidden = true;
  }

  ngOnInit(): void {
  }
}
