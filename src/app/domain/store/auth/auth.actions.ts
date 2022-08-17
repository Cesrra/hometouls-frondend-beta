import { createAction, props } from "@ngrx/store";
import { ILogin } from "src/app/core/models/auth.model";

export const loginAction = createAction(
  "[Auth] Login Action",
  props<{ data: ILogin}>()
);

export const loginSuccessAction = createAction("[Auth] Login Success Action");
export const loginErrorAction = createAction(
  "[Auth] Login Error Action",
  props<{ message:  string}>()
);
