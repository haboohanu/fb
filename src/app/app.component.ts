import { Component, OnInit } from '@angular/core'
import { firebase } from "@nativescript/firebase-core";
import "@nativescript/firebase-auth";

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor() {
    firebase().initializeApp();
  }

  ngOnInit(): void {
  }
}
