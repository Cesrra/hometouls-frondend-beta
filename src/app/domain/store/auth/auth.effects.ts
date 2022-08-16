import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { AuthService } from "src/app/data/services/auth/auth.service";
import { IUserResponse } from "src/app/models/auth.model";
import * as authActions from './auth.actions';


@Injectable()
export class AuthEffects {
  constructor (
    private actions$: Actions,
    private _router: Router,
    private _authService: AuthService,
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginAction),
      exhaustMap((action) =>
        this._authService.login(action.data).pipe(
          map((response: any) => {
            localStorage.setItem('sales.token', response.jwt);
            return authActions.loginSuccessAction();
          }),
          catchError((error) =>
            of(
              authActions.loginErrorAction({
                message: 'User or Password was incorrect',
              })
            )
          )
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.loginSuccessAction),
        tap((_) => {
          this._router.navigateByUrl('home');
        })
      ),
    { dispatch: false }
  );
}
