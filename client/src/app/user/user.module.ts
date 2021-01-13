import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserPageComponent } from './components/user-page/user-page.component';



@NgModule({
  declarations: [SingleUserComponent, AllUsersComponent, UserPageComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
