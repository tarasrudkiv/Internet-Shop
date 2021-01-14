import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddComputerComponent} from "./components/add-computer/add-computer.component";
import {AddProductPageComponent} from "./components/add-product-page/add-product-page.component";
import {AdminPageComponent} from "./components/admin-page/admin-page.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ProductWithSettingsComponent} from "./components/product-with-settings/product-with-settings.component";
import {UpdateComputerComponent} from "./components/update-computer/update-computer.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ProductResolveService} from "../product-module/services/product-resolve.service";


const routes: Routes = [

  {
    path: '', component: AdminPageComponent, children: [
      {path: 'productDetails', component: ProductDetailsComponent, resolve: {allProducts: ProductResolveService}},
      {path: 'update/computer/:id', component: UpdateComputerComponent},
      {path: 'allUsers', loadChildren: () => import('../user-module/user.module').then(m => m.UserModule)},
      {
        path: 'addProduct', component: AddProductPageComponent, children: [
          {path: 'addComputer', component: AddComputerComponent}
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
    UpdateComputerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule
  ]
})
export class AdminModule {
}
