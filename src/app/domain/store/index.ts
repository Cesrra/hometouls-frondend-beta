import { AuthEffects } from "./auth/auth.effects";
import { authReducerInternal } from "./auth/auth.reducer";
import { AuthState } from "./auth/auth.state";

export interface RooState {
  auth: AuthState;
}

export const appReducer = {
  auth: authReducerInternal
}

export const appEffects = [AuthEffects];
