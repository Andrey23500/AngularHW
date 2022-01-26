import { ActionReducer } from "@ngrx/store";
import { AppState } from "../state";

export function log(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    console.log("state", state);
    console.log("action", action);

    return reducer(state, action);
  };
}
