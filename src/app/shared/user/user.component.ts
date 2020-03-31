import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user:any;
  @Input() route:string;
  activeRoute: string= "";

  constructor(private router: Router) {  }

  ngOnInit() {
    this.activeRoute = this.route;
  }

  deactiveUserClicked(user){
    user.isDeleted = true;
  }
  activeUserClicked(user){
    user.isDeleted = false;
  }

  handleDetails(user){
    this.router.navigate(['manage', user.id]);
  }
}
