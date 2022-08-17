import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RooState } from "..";
import { AuthState } from "./auth.state";

export interface AppState {
  feature: AuthState
}

export const selectAuthFeatureState = (state: RooState) => state.auth;

export const selectIsLoadingLogin = createSelector(
  selectAuthFeatureState,
  (state: AuthState) => state.isLoading
);

export const selectIsErrorLogin = createSelector(
  selectAuthFeatureState,
  (state: AuthState) => state.isError
);
