import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule, Routes} from "@angular/router";
import {ProductService} from "./services/product.service";
import { AllProductsComponent } from './components/all-products/all-products.component';
import {ComputerPageComponent} from "./components/product-pages/computer-page/computer-page.component";
import {ConsolePageComponent} from "./components/product-pages/console-page/console-page.component";
import {LaptopPageComponent} from "./components/product-pages/laptop-page/laptop-page.component";
import {MonitorPageComponent} from "./components/product-pages/monitor-page/monitor-page.component";
import {SmartWatchPageComponent} from "./components/product-pages/smart-watch-page/smart-watch-page.component";
import {SmartphonePageComponent} from "./components/product-pages/smartphone-page/smartphone-page.component";
import {TvPageComponent} from "./components/product-pages/tv-page/tv-page.component";
import { ProductCardInBasketComponent } from './components/product-card-in-basket/product-card-in-basket.component';

const routes: Routes = [
  {path: '', component: AllProductsComponent},
  {path: 'product/computer/:id', component: ComputerPageComponent},
  {path: 'product/laptop/:id', component: LaptopPageComponent},
  {path: 'product/console/:id', component: ConsolePageComponent},
  {path: 'product/smartphone/:id', component: SmartphonePageComponent},
  {path: 'product/TV/:id', component: TvPageComponent},
  {path: 'product/smartWatch/:id', component: SmartWatchPageComponent},
  {path: 'product/monitor/:id', component: MonitorPageComponent},
];
@NgModule({
  declarations: [
    ProductCardComponent,
    AllProductsComponent,
    ComputerPageComponent,
    ConsolePageComponent,
    LaptopPageComponent,
    MonitorPageComponent,
    SmartWatchPageComponent,
    SmartphonePageComponent,
    TvPageComponent,
    ProductCardInBasketComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(routes),
  ],
    exports: [
        ProductCardComponent,
        ProductCardInBasketComponent
    ],
  providers: [
    ProductService
  ]
})
export class ProductModule {

}
