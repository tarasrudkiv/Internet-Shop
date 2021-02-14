import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../models/productModel";
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  singleProduct: IProduct;
  public host: string ="http://localhost:8080";
  constructor() {
    this.singleProduct = history.state.product
  }
  ngOnInit(): void {

  }

}
