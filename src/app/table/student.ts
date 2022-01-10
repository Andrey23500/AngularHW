class Student {
  surname: string;
  name: string;
  patronymic: string;
  birthday: string;
  score: number;
  id: number;

  constructor(
    _surname: string,
    _name: string,
    _patronymic: string,
    _birthday: string,
    _score: number,
    _id: number,
  ) {
    this.name = _name;
    this.surname = _surname;
    this.patronymic = _patronymic;
    this.birthday = _birthday;
    this.score = _score;
    this.id = _id;
  }
}
export { Student };
