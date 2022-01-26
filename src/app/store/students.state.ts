import { Student } from "../table-form/table/student";


export interface StudentsState {
  students: Student[];
}

export const initialStudentsState: StudentsState = {
  students: []
};
