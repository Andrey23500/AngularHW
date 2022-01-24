import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Student } from "../table/student";

@Injectable({
  providedIn: "root",
})
export class OffLineService {
  students: Array<Student> = [
    new Student("Рябов", "Влад", "Альбертович", "March 12, 2000", 5.0, 1),
    new Student("Марков", "Иван", "Якубович", "March 18, 1999", 3.2, 2),
    new Student("Петров", "Максим", "Иванович", "March 12, 2002", 2.3, 3),
    new Student("Владов", "Марк", "Петрович", "March 12, 1997", 3.7, 4),
    new Student("Сидоров", "Семен", "Олегович", "April 12, 2001", 4.1, 5),
    new Student("Смирнов", "Николай", "Робертович", "March 12, 2001", 2.7, 6),
  ];

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }
  delStudent(id: number): void {
    const index = this.students.findIndex((n) => n.id === id);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }
  addStudent(student: Student): void {
    this.students.push(student);
  }
  editStudent(id: number, editStudent: Student): void {
    for (let student of this.students) {
      if (student.id === id) {
        console.log(editStudent);
        student = editStudent;
      }
    }
  }
  constructor(public http: HttpClient) {
    console.log("OffLine service");
  }
}
