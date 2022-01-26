import { Action } from "@ngrx/store";
import { Student } from "src/app/table-form/table/student";

export const GET_STUDENTS = "[STUDENTS] GET_STUDENTS";
export const GET_STUDENTS_SUCCESS = "[STUDENTS] GET_STUDENTS_SUCCESS";

export class GetStudentsAction implements Action {
  public readonly type =  GET_STUDENTS;
}

export class GetStudentSuccessAction implements Action {
  public readonly type =  GET_STUDENTS_SUCCESS;

  constructor(public students: Student[]) {
  }
}

export type StudentsActions = GetStudentsAction | GetStudentSuccessAction;
