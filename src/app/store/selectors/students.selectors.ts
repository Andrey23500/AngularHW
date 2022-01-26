import { AppState } from "../state";
import { createSelector } from "@ngrx/store";
import { StudentsState } from "../students.state";

const selectStudentsState = (state: AppState): StudentsState => state.students;

export const selectStudents = createSelector(
  selectStudentsState,
  (state: StudentsState) => state.students,
);
