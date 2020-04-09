import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { AppSettings } from '../../../../constants';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css']
})
export class CreateNewUserComponent implements OnInit {
  PASS_FIELD_ALERT : string;

  createForm : FormGroup= new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    login: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.minLength(4),
       Validators.required,
       Validators.pattern(AppSettings.PASS_PATTERN)]) ,
    age: new FormControl(''),
  });
  constructor(private userService : UserService) {
    this.PASS_FIELD_ALERT = AppSettings.PASS_FIELD_ALERT;
  }

  ngOnInit() {
  }
  createUser() {
    this.userService.createUser(
      this.createForm.value
    ).subscribe(
      (result) => {
        this.createForm.reset();
      }
    );
  }


}
