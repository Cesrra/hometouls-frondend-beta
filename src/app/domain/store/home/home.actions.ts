import { createAction, props } from "@ngrx/store";
import { IProducts, IProject, IStore } from "src/app/core/models/home.models";


export const getStoresAction = createAction('[Home] Get Stores');
export const getProjectsAction = createAction('[Home] Get Projects');
export const getProductsAction = createAction('[Home] Get Products');
export const successStoresAction = createAction('[Home] Success Stores', props<{stores: IStore[]}>());
export const successProjectsAction = createAction('[Home] Success Projects', props<{projects: IProject[]}>());
export const successProductsAction = createAction('[Home] Success Products', props<{products: IProducts[]}>());
