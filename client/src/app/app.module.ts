import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ProductPageComponent} from "./components/product-page/product-page.component";
import {AddComputerComponent} from "./components/add-computer/add-computer.component";
import {ProductCardComponent} from './components/product-card/product-card.component';
import {AllProductsComponent} from "./components/all-products/all-products.component";
import {HomePageComponent} from './components/home-page/home-page.component';
import {RouterModule, Routes} from "@angular/router";
import {AdminPageComponent} from './components/admin-page/admin-page.component';
import {AddProductPageComponent} from './components/add-product-page/add-product-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductWithSettingsComponent } from './components/product-with-settings/product-with-settings.component';
import {ProductResolveService} from "./services/resolve/product-resolve.service";
import { UpdateComputerComponent } from './components/update-computer/update-computer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'allProducts', component: AllProductsComponent, resolve:{allProducts: ProductResolveService}},
  {path: 'AddComputer', component: AddComputerComponent},
  {path: 'product/:id', component: ProductPageComponent},
    {path: 'update/computer/:id',component: UpdateComputerComponent },
  {
    path: 'admin', component: AdminPageComponent, children: [
      {path:'productDetails',component: ProductDetailsComponent, resolve:{allProducts: ProductResolveService}},
      {path:'addProduct', component: AddProductPageComponent,children:[
          {path:'addComputer',component: AddComputerComponent}
        ]}
]
},

]
;

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    AddComputerComponent,
    ProductCardComponent,
    AllProductsComponent,
    HomePageComponent,
    AdminPageComponent,
    AddProductPageComponent,
    ProductDetailsComponent,
    ProductWithSettingsComponent,
    UpdateComputerComponent,
    UpdateComputerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
