import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { IStore } from 'src/app/core/models/home.models';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @Input() store: IStore | null;
  constructor() {
    this.store = null;
  }

  ngOnInit(): void {
  }

}
