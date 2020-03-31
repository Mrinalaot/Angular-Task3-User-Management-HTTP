import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const manageRoutes: Routes = [
  {
      path: '', component: ManageUserComponent, 
      children: [
          { path: ':id', component: UserDetailsComponent }
      ]
  },
];


@NgModule({
  declarations: [ManageUserComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(manageRoutes),
  ],
  exports:[
    ManageUserComponent, UserDetailsComponent
  ]
})
export class ManageModule { }
