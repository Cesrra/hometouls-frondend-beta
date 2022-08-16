import { createAction } from "@ngrx/store";

export const increment = createAction('[Employee Component] Increment');
export const decrement = createAction('[Employee Component] Decrement');
export const reset = createAction('[Employee Component] Reset');

// import { createAction, props } from '@ngrx/store';

// export const login = createAction(
//   '[Login Page] Login',
//   props<{ username: string; password: string }>()
// );
