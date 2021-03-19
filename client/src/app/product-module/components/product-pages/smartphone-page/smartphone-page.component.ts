import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../../models/productModel";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-smartphone-page',
  templateUrl: './smartphone-page.component.html',
  styleUrls: ['./smartphone-page.component.css']
})
export class SmartphonePageComponent implements OnInit {

  singleProduct: IProduct;
  public host: string = "http://localhost:8080";
  isCharacteristicsOpen = false;

  constructor(private productService: ProductService, private router: Router) {
    if (!!history.state.product) {
      this.singleProduct = history.state.product
    } else {
      this.productService.getProductById(history.state.id).subscribe(value => this.singleProduct = value)
    }
  }

  public openCloseCharacteristics() {
    this.isCharacteristicsOpen = !this.isCharacteristicsOpen
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem("token") === true;
  }

  orderProduct(product: IProduct) {
    if (this.isAuthenticated() === true) {
      this.router.navigate(["order"], {state: {product}})
    } else {
      this.router.navigate(["/authentication"]);
    }
  }

  ngOnInit(): void {
  }

}
