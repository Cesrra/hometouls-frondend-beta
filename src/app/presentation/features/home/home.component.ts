import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeFacade } from 'src/app/facades/home.facade';
import { IStore } from 'src/app/models/home.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stores$: Observable<IStore[] | null>;
  loadingStores$: Observable<boolean | null>;

  constructor(private _homeFacade: HomeFacade) {
    this.stores$ = this._homeFacade.stores$;
    this.loadingStores$ = this._homeFacade.loadingStores$;
  }

  ngOnInit(): void {
    this._homeFacade.getStores();
    // this._homeFacade
    // console.log('stores    -    ',this.stores$)
  }

}
