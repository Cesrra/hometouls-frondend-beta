import { IProducts, IProject, IStore } from "src/app/models/home.models";


export interface HomeState {
  stores: IStore[] | null;
  loadingStore: boolean | null;
  projects: IProject[] | null;
  loadingProjects: boolean | null;
  products: IProducts[] | null;
  loadingProducts: boolean | null;
}
