import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { UserFullnamePipe } from '../user-fullname.pipe';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserFullnamePipe]
})
export class UserComponent implements OnInit {

  @Input() user:any;
  @Input() route:string;
  activeRoute: string= "";

  constructor(private router: Router, private userService : UserService,
     private userFullname : UserFullnamePipe) {  }

  ngOnInit() {
    this.activeRoute = this.route;
  }

  deactiveUserClicked(user){
    user.isDeleted = true;
    this.userService.updateUser(user).subscribe();
  }
  activeUserClicked(user){
    user.isDeleted = false;
    this.userService.updateUser(user).subscribe();
  }

  handleDetails(user){
    this.router.navigate(['manage', user.id]);
  }

  handleEdit(id: string){
    this.router.navigate(['manage/edit/', id]);
  }
}
