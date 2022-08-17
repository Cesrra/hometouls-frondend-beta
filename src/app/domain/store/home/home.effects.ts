import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { ProductsService } from "src/app/data/services/products/products.service";
import * as homeActions from "./home.actions";


@Injectable()
export class HomeEffects {
  constructor(
    private actions$: Actions,
    private _router: Router,
    private _productsService: ProductsService
  ) {}

  getStores$ = createEffect(() =>
    this.actions$.pipe(
      ofType(homeActions.getStoresAction),
      switchMap((action) =>
        this._productsService.getStores().pipe(
          map((response) => {
            const stores = response;
            return homeActions.successStoresAction({stores});
          })
        )
      )
    )
  )

}
