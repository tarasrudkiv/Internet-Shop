import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddComputerComponent} from "./components/add-products/add-computer/add-computer.component";
import {AddProductPageComponent} from "./components/add-product-page/add-product-page.component";
import {AdminPageComponent} from "./components/admin-page/admin-page.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ProductWithSettingsComponent} from "./components/product-with-settings/product-with-settings.component";
import {UpdateComputerComponent} from "./components/update-products/update-computer/update-computer.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AddLaptopComponent} from './components/add-products/add-laptop/add-laptop.component';
import {AddSmartphoneComponent} from './components/add-products/add-smartphone/add-smartphone.component';
import {AddTVComponent} from './components/add-products/add-tv/add-tv.component';
import {AddMonitorComponent} from './components/add-products/add-monitor/add-monitor.component';
import {AddConsoleComponent} from './components/add-products/add-console/add-console.component';
import {AddSmartWatchComponent} from './components/add-products/add-smart-watch/add-smart-watch.component';
import {UpdateConsoleComponent} from './components/update-products/update-console/update-console.component';
import {UpdateLaptopComponent} from './components/update-products/update-laptop/update-laptop.component';
import {UpdateSmartphoneComponent} from './components/update-products/update-smartphone/update-smartphone.component';
import {UpdateMonitorComponent} from './components/update-products/update-monitor/update-monitor.component';
import {UpdateTvComponent} from './components/update-products/update-tv/update-tv.component';
import {UpdateSmartWatchComponent} from './components/update-products/update-smart-watch/update-smart-watch.component';
import {AllUsersComponent} from "../user-module/components/all-users/all-users.component";
import {AllOrdersComponent} from "../order-module/components/all-orders/all-orders.component";
import {StatisticsPageComponent} from './components/statistics-page/statistics-page.component';
import {MostPopularProductCardComponent} from './components/most-popular-product-card/most-popular-product-card.component';
import { StatisticsCardComponent } from './components/statistics-card/statistics-card.component';


const routes: Routes = [

  {
    path: '', component: AdminPageComponent, children: [
      {path: 'productDetails', component: ProductDetailsComponent},
      {path: 'order/allOrders', component: AllOrdersComponent},
      {path: 'allUsers', component: AllUsersComponent},
      {path: 'statistics', component: StatisticsPageComponent},
      {path: 'update/computer/:id', component: UpdateComputerComponent},
      {path: 'update/laptop/:id', component: UpdateLaptopComponent},
      {path: 'update/console/:id', component: UpdateConsoleComponent},
      {path: 'update/smartphone/:id', component: UpdateSmartphoneComponent},
      {path: 'update/TV/:id', component: UpdateTvComponent},
      {path: 'update/monitor/:id', component: UpdateMonitorComponent},
      {path: 'update/smartWatch/:id', component: UpdateSmartWatchComponent},
      {
        path: 'addProduct', component: AddProductPageComponent, children: [
          {path: 'addComputer', component: AddComputerComponent},
          {path: 'addLaptop', component: AddLaptopComponent},
          {path: 'addConsole', component: AddConsoleComponent},
          {path: 'addSmartphone', component: AddSmartphoneComponent},
          {path: 'addSmartWatch', component: AddSmartWatchComponent},
          {path: 'addTV', component: AddTVComponent},
          {path: 'addMonitor', component: AddMonitorComponent},
        ]
      }
    ]
  },
];

@NgModule({
  declarations: [
    AddComputerComponent,
    AddProductPageComponent,
    AdminPageComponent,
    ProductDetailsComponent,
    ProductWithSettingsComponent,
    UpdateComputerComponent,
    AddLaptopComponent,
    AddSmartphoneComponent,
    AddTVComponent,
    AddMonitorComponent,
    AddConsoleComponent,
    AddSmartWatchComponent,
    UpdateConsoleComponent,
    UpdateLaptopComponent,
    UpdateSmartphoneComponent,
    UpdateMonitorComponent,
    UpdateTvComponent,
    UpdateSmartWatchComponent,
    StatisticsPageComponent,
    MostPopularProductCardComponent,
    StatisticsCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
  ],

})
export class AdminModule {
}
