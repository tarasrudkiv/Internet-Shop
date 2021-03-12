import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserCardComponent} from './components/user-card/user-card.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {UserPageComponent} from "./components/user-page/user-page.component";
import {FormsModule} from "@angular/forms";
import {MyOrdersComponent} from "../order-module/components/my-orders/my-orders.component";
import {BasketComponent} from "../components/basket/basket.component";

const routes: Routes = [
  {
    path: '', component: UserPageComponent, children: [
      {path: 'order/myOrders', component: MyOrdersComponent},
      {path: 'basket', component: BasketComponent}
    ]
  },
  {path: 'admin', loadChildren: () => import('../admin-module/admin.module').then(m => m.AdminModule)},
];

@NgModule({
  declarations: [
    AllUsersComponent,
    UserCardComponent,
    UserPageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class UserModule {
}
