import { initialStudentsState, StudentsState } from "./students.state";
import { ActionReducerMap } from "@ngrx/store";
import { studentsReducer } from "./reducers/students.reducer";

export interface AppState {
  students: StudentsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  students: studentsReducer
};

export const initialAppState: AppState = {
  students: initialStudentsState
};

export function getInitialState(): AppState {
  return initialAppState;
}
