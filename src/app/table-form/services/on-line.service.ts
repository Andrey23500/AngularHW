import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Student } from "../table/student";
@Injectable({
  providedIn: "root",
})
export class OnLineService {
  private url = `http://localhost:3000/students`;

  constructor(public http: HttpClient) {
    console.log("Online service");
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }
  delStudent(id: number): void {
    this.http.delete<Student>(this.url + `/${id}`).subscribe((data) => {
      console.log(data);
    });
  }
  addStudent(student: Student): void {
    this.http.post<Student>(this.url, student).subscribe((data) => {
      console.log(data);
    });
  }
  editStudent(id: number, editStudent: Student): void {
    this.http.patch(this.url + `/${id}`, editStudent).subscribe((data) => {
      console.log(data);
    });
  }
}
