import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./employee.actions";

export const initialState = 0;

export const employeeReducer = createReducer(
  initialState,
  on(increment, state => {
    console.log(typeof state)
    return rt(state);
  }),
  on(decrement, state => state -1),
  on(reset, state => 0)
);

const rt = (state: number) => {
  return state +1;
}

// export const scoreboardReducer = createReducer(
//   initialState,
//   on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
//   on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
//   on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
//   on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
// );
