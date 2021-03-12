import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllOrdersComponent} from './components/all-orders/all-orders.component';
import {OrderCardForAdminComponent} from './components/order-card-for-admin/order-card-for-admin.component';
import {OrderCardForUserComponent} from './components/order-card-for-user/order-card-for-user.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {MyOrdersComponent} from './components/my-orders/my-orders.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {OrderInfoPageComponent} from './components/order-info-page/order-info-page.component';
import {OrderPageComponent} from "./components/order-page/order-page.component";

const routes: Routes = [
  {path: '', component: OrderPageComponent},
  {path: 'orderInfoPage', component: OrderInfoPageComponent},
];

@NgModule({
  declarations: [
    OrderPageComponent,
    AllOrdersComponent,
    OrderCardForAdminComponent,
    OrderCardForUserComponent,
    MyOrdersComponent,
    OrderInfoPageComponent
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
