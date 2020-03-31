import { Injectable } from '@angular/core';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users  : User[] = [
    { id: "1", firstName: 'Mrinal', lastName: 'Ghosh', age: 23, login: "id1", password: "p1", isDeleted: false},
    { id: "2", firstName: 'Arunima', lastName: 'Mondal', age: 22, login: "id2", password: "p2", isDeleted: true},
    { id: "3", firstName: 'Rupam', lastName: 'Sinha', age: 23, login: "id3", password: "p3", isDeleted: false },
    { id: "4", firstName: 'Debottam', lastName: 'Basu', age: 26, login: "id4", password: "p4", isDeleted: true },
    { id: "5", firstName: 'Ashis', lastName: 'Chanchalani', age: 24, login: "id5", password: "p5", isDeleted: true }
  ];  
  constructor() { }
}
