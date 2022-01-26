import { initialStudentsState, StudentsState } from "../students.state";
import {
  StudentsActions,
  GET_STUDENTS_SUCCESS,
} from "../actions/students.actions";


export const studentsReducer = (state: StudentsState = initialStudentsState, action: StudentsActions): StudentsState => {
  switch (action.type) {

    case GET_STUDENTS_SUCCESS: {
      return {
        ...state,
        students: [...action.students]
      };
    }

    default: {
      return state;
    }

  }
};

