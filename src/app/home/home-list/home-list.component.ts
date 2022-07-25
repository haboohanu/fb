import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'

import { DataService, DataItem } from '../../shared/data.service'

@Component({
  selector: 'Home',
  templateUrl: './home-list.component.html',
})
export class HomeListComponent implements OnInit {
  items: Array<DataItem>

  constructor(private _itemService: DataService,
    private routerExtensions: RouterExtensions,
    private activeRoute: ActivatedRoute,) {}

  ngOnInit(): void {
    this.items = this._itemService.getItems()
  }

}
