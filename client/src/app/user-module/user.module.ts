import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllUsersComponent} from "./components/all-users/all-users.component";
import {UserCardComponent} from "./components/user-card/user-card.component";
import {UserPageComponent} from "./components/user-page/user-page.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";

import {RouterModule, Routes} from "@angular/router";
import {UserResolveService} from "./services/user-resolve.service";

const routes: Routes=[
  { path:'', component: AllUsersComponent, resolve: {allUsers: UserResolveService}},
  {path: 'user/:id', component: UserPageComponent},
];
@NgModule({
  declarations: [
    AllUsersComponent,
    UserCardComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule {
}
