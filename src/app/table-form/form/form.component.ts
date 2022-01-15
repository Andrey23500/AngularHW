import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { Student } from "../table/student";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  @Input() arrStudents: Array<Student> = [];
  @Input() edit: boolean = false;
  @Input() id: number | undefined;

  formModel = new FormGroup({
    fullName: new FormGroup(
      {
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern("[А-Яа-я]*"),
        ]),
        surname: new FormControl(null, [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern("[А-Яа-я]*"),
        ]),
        patronymic: new FormControl(null, [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern("[А-Яа-я]*"),
        ]),
      },
      this.fullNameValidator,
    ),
    birthday: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      this.dateValidator,
    ]),
    score: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern("[2-5]*[.,]?[0-9]*"),
    ]),
  });

  fullNameValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value.name === control.value.surname) {
      return { error: "control.value.name === control.value.surname" };
    }
    if (control.value.name === control.value.patronymic) {
      return { "control.value.name === control.value.patronymic": true };
    }
    return null;
  }
  dateValidator(control: AbstractControl): ValidationErrors | null {
    const currentDate = new Date();
    const lastDate = new Date(
      currentDate.setFullYear(currentDate.getFullYear() - 10),
    );
    const inputDate = new Date(control.value);
    if (inputDate > lastDate) {
      return { error: "inputDate > lastDate" };
    }
    return null;
  }

  addNewStudent(): void {
    if (this.formModel.valid) {
      const newStudent: Student = {
        name: this.formModel.value.fullName.name,
        surname: this.formModel.value.fullName.surname,
        patronymic: this.formModel.value.fullName.patronymic,
        birthday: this.formModel.value.birthday,
        score: this.formModel.value.score,
        id: this.arrStudents.length + 1,
      };
      this.arrStudents.push(newStudent);
    }
  }

  editStudent(): void {
    if (this.id) {
      for (const student of this.arrStudents) {
        if (student.id === this.id) {
          if (this.formModel.valid) {
            const formValues: Student = {
              name: this.formModel.value.fullName.name,
              surname: this.formModel.value.fullName.surname,
              patronymic: this.formModel.value.fullName.patronymic,
              birthday: this.formModel.value.birthday,
              score: this.formModel.value.score,
              id: this.id,
            };
            student.name = formValues.name;
            student.surname = formValues.surname;
            student.patronymic = formValues.patronymic;
            student.birthday = formValues.birthday;
            student.score = formValues.score;
          }
        }
      }
    }
  }

  showInputs(id: number): void {
    for (const student of this.arrStudents) {
      if (student.id === id) {
        this.formModel.get("fullName.name")?.setValue(student.name);
        this.formModel.get("fullName.surname")?.setValue(student.surname);
        this.formModel.get("fullName.patronymic")?.setValue(student.patronymic);
        this.formModel.get("birthday")?.setValue(student.birthday);
        this.formModel.get("score")?.setValue(student.score);
      }
    }
  }
  ngOnInit(): void {
    if (this.id) {
      this.showInputs(this.id);
    }
  }
  added(): void {
    if (this.edit) {
      this.editStudent();
    } else {
      this.addNewStudent();
    }
  }
}
