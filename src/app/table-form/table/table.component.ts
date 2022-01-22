import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";
import { OffLineService } from "../services/off-line.service";
import { Student } from "./student";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./table.component.css"],
})
export class TableComponent {
  students: Array<Student> = [];
  constructor(public router: Router, private service: OffLineService) {
    this.students = service.getStudents();
  }
  range: boolean = false;
  isAskSort: boolean = true;
  findedStudents: Array<number> = [];
  deleteStudents: Array<number> = [];
  popUp = {
    name: "",
    surname: "",
    isShow: false,
    message: "",
  };

  showPopUp(name: string, surname: string): void {
    this.popUp.name = name;
    this.popUp.surname = surname;
    this.popUp.message = `Удалить студента ${surname} ${name}?`;
    this.popUp.isShow = true;
  }
  hide(): void {
    this.popUp.isShow = false;
  }

  deleteStudent(prop: string): void {
    this.service.delStudent(prop);
    this.popUp.isShow = false;
  }

  sort(property: keyof Student): void {
    if (this.isAskSort) {
      this.students.sort((a: Student, b: Student): number => {
        if (
          property === "surname" ||
          property === "name" ||
          property === "patronymic"
        ) {
          const nameA = a[property].toUpperCase();
          const nameB = b[property].toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }
        if (property === "birthday") {
          const dateA = new Date(a.birthday);
          const dateB = new Date(b.birthday);
          if (dateA < dateB) {
            return -1;
          }
          if (dateA > dateB) {
            return 1;
          }
          return 0;
        }
        if (property === "score") {
          return a.score - b.score;
        }
        return 1;
      });
    } else {
      this.students.sort((a: Student, b: Student): number => {
        if (
          property === "surname" ||
          property === "name" ||
          property === "patronymic"
        ) {
          const nameA = a[property].toUpperCase();
          const nameB = b[property].toUpperCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        }
        if (property === "birthday") {
          const dateA = new Date(a.birthday);
          const dateB = new Date(b.birthday);
          if (dateA < dateB) {
            return 1;
          }
          if (dateA > dateB) {
            return -1;
          }
          return 0;
        }
        if (property === "score") {
          return b.score - a.score;
        }
        return 1;
      });
    }
    this.isAskSort = !this.isAskSort;
  }

  search(prop: string): void {
    this.clearFilter();
    if (prop.includes(" ")) {
      const arr = prop.split(" ");
      const name = arr[0];
      const surname = arr[1];
      for (const student of this.students) {
        if (
          student.name.toLocaleLowerCase() === name.toLocaleLowerCase() &&
          student.surname.toLocaleLowerCase() === surname.toLocaleLowerCase()
        ) {
          this.findedStudents.push(student.id);
        }
      }
    } else {
      for (const student of this.students) {
        if (
          student.surname.toLocaleLowerCase() === prop.toLocaleLowerCase() ||
          student.name.toLocaleLowerCase() === prop.toLocaleLowerCase()
        ) {
          this.findedStudents.push(student.id);
        }
      }
    }
  }

  filterScore(minScore: string, maxScore: string): void {
    this.clearFilter();
    const correctMinScore = +minScore;
    const correctMaxScore = +maxScore;

    if (correctMaxScore > correctMinScore && minScore && maxScore) {
      for (const student of this.students) {
        if (
          student.score > correctMaxScore ||
          student.score < correctMinScore
        ) {
          this.deleteStudents.push(student.id);
        }
      }
    }
  }

  filterDate(dataMin: string, dataMax: string): void {
    this.clearFilter();
    const correctMinDate = +new Date(dataMin);
    const correctMaxDate = +new Date(dataMax);

    if (correctMaxDate > correctMinDate && dataMin && dataMax) {
      for (const student of this.students) {
        const birthDate = +new Date(student.birthday);
        if (birthDate > correctMaxDate || birthDate < correctMinDate) {
          this.deleteStudents.push(student.id);
        }
      }
    }
  }

  clearFilter(): void {
    this.findedStudents.length = 0;
    this.deleteStudents.length = 0;
  }
}
