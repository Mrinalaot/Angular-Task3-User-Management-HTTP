import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';



@NgModule({
  declarations: [UserComponent, UserlistComponent],
  imports: [
    CommonModule
  ],
  exports:[UserComponent, UserlistComponent]
})
export class SharedModule { }
