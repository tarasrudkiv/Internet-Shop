import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllProductsComponent} from "./components/all-products/all-products.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {ProductPageComponent} from "./components/product-page/product-page.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule, Routes} from "@angular/router";
import {ProductResolveService} from "./services/product-resolve.service";
import {ProductService} from "./services/product.service";

const routes: Routes = [
  {path: '', component: AllProductsComponent, resolve:{allProducts: ProductResolveService}},
  {path: 'product/:id', component: ProductPageComponent},
];


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductCardComponent,
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    ProductResolveService,
    ProductService
  ]
})
export class ProductModule {

}
