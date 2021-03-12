import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../../models/productModel";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-laptop-page',
  templateUrl: './laptop-page.component.html',
  styleUrls: ['./laptop-page.component.css']
})
export class LaptopPageComponent implements OnInit {
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

  orderProduct(product: IProduct) {
    this.router.navigate(["order"], {state: {product}})
  }

  ngOnInit(): void {
  }

}
