import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { AppState } from "../state";
import { Store } from "@ngrx/store";
import { OnLineService } from "src/app/table-form/services/on-line.service";
import { GET_STUDENTS, GetStudentSuccessAction } from "../actions/students.actions";
import { map, mergeMap } from "rxjs";



@Injectable({
  providedIn: "root"
})

export class StudentsEffects {

  @Effect()
  getStudents$ = this.actions$.pipe(
    ofType(GET_STUDENTS),
    mergeMap(() =>
      this.studentsService.getStudents().pipe(
        map((students) => {
          return new GetStudentSuccessAction(students);
        }),
      ),
    ),
  );

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private studentsService: OnLineService,
  ) { }

}
