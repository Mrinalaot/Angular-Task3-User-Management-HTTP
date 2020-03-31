import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/user.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  animations:[
    trigger('userDetailAnimate',[ 
      state('open', style({
        opacity: 0,
      })),
      state('closed', style({
        opacity: 0.5,
      })),
      transition('open <=> closed', [
        animate('1s')
      ]),
    ])
  ],
})
export class UserDetailsComponent implements OnInit {

  user: any;
  constructor(private route: ActivatedRoute, private usersService: UserService) {


  }
  ngOnInit() {
    const idParam = this.route.snapshot.params['id'];
    this.user = this.usersService.users.find((u) => u.id === idParam);

    this.route.params.subscribe(
      (param) => {
        this.user = this.usersService.users.find((u) => u.id === param['id']);
      }
    );
  }

}
