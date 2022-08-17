import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { RootState } from "../domain/store";
import { getStoresAction } from "../domain/store/home/home.actions";
import * as homeSelectors from "../domain/store/home/home.selectors";
import { IStore } from "../core/models/home.models";


@Injectable({ providedIn: 'root' })
export class HomeFacade {
  loadingStores$: Observable<boolean | null>;
  stores$: Observable<IStore[] | null>;


  constructor(
    private _store: Store<RootState>
  )
  {
    this.stores$ = this._store.select(homeSelectors.selectStores);
    this.loadingStores$ = this._store.select(homeSelectors.selectLoadingStores);
  }

  getStores()
  {
    this._store.dispatch(getStoresAction());
  }

  getLoadingStore()
  {
    // this._store.dispatch();
  }

}
