import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../models/productModel";
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  singleProduct: IProduct;
  constructor() {
    this.singleProduct = history.state.product
  }
  ngOnInit(): void {

  }

}
