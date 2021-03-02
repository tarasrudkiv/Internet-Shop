import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderPageComponent} from './components/order-page/order-page.component';
import {AllOrdersComponent} from './components/all-orders/all-orders.component';
import {OrderCardForAdminComponent} from './components/order-card-for-admin/order-card-for-admin.component';
import {OrderCardForUserComponent} from './components/order-card-for-user/order-card-for-user.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {MyOrdersComponent} from './components/my-orders/my-orders.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {path: '', component: OrderPageComponent},
  {path: 'allOrders', component: AllOrdersComponent},
];

@NgModule({
  declarations: [
    OrderPageComponent,
    AllOrdersComponent,
    OrderCardForAdminComponent,
    OrderCardForUserComponent,
    MyOrdersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    NgbModule,
  ]
})
export class OrderModuleModule {
}
