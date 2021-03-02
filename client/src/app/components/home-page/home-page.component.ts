import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IProduct} from "../../product-module/models/productModel";
import {ProductService} from "../../product-module/services/product.service";
import {IProductPage} from "../../product-module/models/productPageModel";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products: IProduct[];
  totalElements: number;
  userId: string;


  constructor(private  router: Router,) {
    this.router.navigate(['allProducts']);
    if (localStorage.getItem("id") != null) {
      this.userId = localStorage.getItem("id")
    }
  }

  public logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("role");
    this.router.navigate(['/'])
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem("token") === true;
  }

  toHomePage() {
    this.router.navigate(["/"]);
  }

  toProductDetails(product: IProduct) {
    this.router.navigate(['allProducts/product', product.id], {state: {product}})
  }

  toBasket() {
    this.router.navigate(['/basket/', this.userId])
  }

  ngOnInit(): void {
  }

}
