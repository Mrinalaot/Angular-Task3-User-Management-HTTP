import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css']
})
export class CreateNewUserComponent implements OnInit {
  createForm : FormGroup= new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    login: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.minLength(4), Validators.required]) ,
    age: new FormControl(''),
  });
  constructor(private userService : UserService) { }

  ngOnInit() {
  }
  createUser() {
    this.userService.createUser(
      this.createForm.value
    ).subscribe(
      (result) => {
        console.log('Result: Create User API - ', result);
        this.createForm.reset();
      },
      (error) => {
        console.log('Error: Create User API - ', error);
      },
      () => {
        console.log('Complete: Create User API');
      }
    );
  }


}
