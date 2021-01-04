import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {IProduct} from "../../models/productModel";
import {ActivatedRoute} from "@angular/router";

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
