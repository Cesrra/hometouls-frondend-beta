export interface IProject {
  id: string;
  id_buildfer: string;
  name: string;
  start_date: Date;
  end_date: Date;
  budget: number;
  cost: number;
}

export interface IStore {
  id: string;
  name: string;
}

export interface IProducts {
  id: string;
  id_store: string;
  name: string;
  description: string;
  amount: number;
  price: number;
}
