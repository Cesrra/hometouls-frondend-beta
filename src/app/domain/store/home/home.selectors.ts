import { createSelector } from "@ngrx/store";
import { RootState } from "..";
import { HomeState } from "./home.state";

export const selectHomeFeatureState = (state: RootState) => state.home;

export const selectLoadingStores = createSelector(
  selectHomeFeatureState,
  (state: HomeState) => state.loadingStore
);

export const selectLoadingProjects = createSelector(
  selectHomeFeatureState,
  (state: HomeState) => state.loadingProjects
);

export const selectLoadingProducts = createSelector(
  selectHomeFeatureState,
  (state: HomeState) => state.loadingProducts
);

export const selectStores = createSelector(
  selectHomeFeatureState,
  (state: HomeState) => state.stores
);

export const selectProjects = createSelector(
  selectHomeFeatureState,
  (state: HomeState) => state.projects
);


export const selectProducts = createSelector(
  selectHomeFeatureState,
  (state: HomeState) => state.products
);
