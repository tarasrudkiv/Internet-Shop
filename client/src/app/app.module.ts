import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HomePageComponent} from './components/home-page/home-page.component';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationPageComponent} from './components/registration-page/registration-page.component';
import {AuthenticationPageComponent} from './components/authentication-page/authentication-page.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AdminPageComponent} from "./admin-module/components/admin-page/admin-page.component";
import {UserPageComponent} from "./user-module/components/user-page/user-page.component";


const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'allProducts', loadChildren: () => import('./product-module/product.module').then(m => m.ProductModule)},
    {path: 'admin', loadChildren: () => import('./admin-module/admin.module').then(m => m.AdminModule)},
    {path: 'authentication', component: AuthenticationPageComponent},
    {path: 'registration', component: RegistrationPageComponent},
    {path: 'userPage', component: UserPageComponent},
    {path: 'userPage/admin', component: AdminPageComponent},
  ]
;

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistrationPageComponent,
    AuthenticationPageComponent,
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
