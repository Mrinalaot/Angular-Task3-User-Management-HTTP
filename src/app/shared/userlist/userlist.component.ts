import { Component, OnInit,Input } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  
  @Input() route:string;
  usersList = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.usersList = this.userService.users;
  }

}
