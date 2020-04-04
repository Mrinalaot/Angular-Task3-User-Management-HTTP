import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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


  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get<any[]>('http://localhost:8080/users');
  }

  getUser(id: string) {
    return this.http.get('http://localhost:8080/users/'+ id);
  }

  createUser(user: User) {
    return this.http.post('http://localhost:8080/users', user);
  }

  updateUser(user: Partial<User>) {
    return this.http.put('http://localhost:8080/users/' + user.id, {
      password: user.password,
      age: user.age,
      isDeleted: user.isDeleted
    });   
 }

  delete(id: string) {
    return this.http.delete('http://localhost:8080/users/' + id);
  }
}
