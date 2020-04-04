import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userId : string;

  updateForm: FormGroup = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')),
    ]),
    age: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      (param) => {
        this.userId = param['id'];
      }
    );
  }

  updateUser() {
    this.userService.updateUser(
      {
        ...this.updateForm.value,
        id: this.userId,
      }

    ).subscribe(
      (result) => {
        console.log('Result: Update User API - ', result);
        this.updateForm.reset();
      },
      (error) => {
        console.log('Error: Update User API - ', error);
      },
      () => {
        console.log('Complete: Update User API');
      }
    );
  }

}
