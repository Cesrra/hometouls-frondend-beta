import { createReducer, on, Action } from "@ngrx/store";
import * as homeActions  from "./home.actions";
import { HomeState } from "./home.state";


export const initialHomeState: HomeState = {
  stores: null,
  loadingStore: true,
  projects: null,
  loadingProjects: true,
  products: null,
  loadingProducts: true,
}

const homeReducerInternal = createReducer(
  initialHomeState,
  on(homeActions.successStoresAction, (state, { stores }) => {
    return {
      ...state,
      stores,
      loadingStore: false
    }
  }),
  on(homeActions.successProductsAction, (state, { products }) => {
    return {
      ...state,
      products,
      loadingProducts: false
    }
  }),
  on(homeActions.successProjectsAction, (state, { projects }) => {
    return {
      ...state,
      projects,
      loadingProjects: false
    }
  })
)

export function homeReducer(state: HomeState | undefined, action: Action) {
  return homeReducerInternal(state, action);
}
