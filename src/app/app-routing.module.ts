import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivateUserComponent } from './activate/activate-user/activate-user.component';
import { DeletedUserComponent } from './deleted/deleted-user/deleted-user.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
   { path: "activate", component: ActivateUserComponent},
   { path: "deleted", component: DeletedUserComponent},
   {
    path: 'manage', 
    loadChildren: ()=> import('./manage/manage.module').then(
        (file) => file.ManageModule
    )
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
