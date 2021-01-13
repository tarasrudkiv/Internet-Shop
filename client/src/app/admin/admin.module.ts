import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComputerComponent } from './components/add-computer/add-computer.component';
import { AddProductPageComponent } from './components/add-product-page/add-product-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductWithSettingsComponent } from './components/product-with-settings/product-with-settings.component';
import { UpdateComputerComponent } from './components/update-computer/update-computer.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    AddComputerComponent,
    AddProductPageComponent,
    AdminPageComponent,
    AllUsersComponent,
    ProductDetailsComponent,
    ProductWithSettingsComponent,
    UpdateComputerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class AdminModule { }
