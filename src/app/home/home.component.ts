import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'
import { Page } from '@nativescript/core'

import { DataService, DataItem } from '../shared/data.service'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  items: Array<DataItem>

  constructor(private _itemService: DataService,
    private routerExtensions: RouterExtensions,
    private activeRoute: ActivatedRoute,
    private page: Page
    ) {
      page.actionBarHidden = true;
    }

  ngOnInit(): void {
  }
}
