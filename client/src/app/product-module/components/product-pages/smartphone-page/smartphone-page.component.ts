import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../../models/productModel";

@Component({
  selector: 'app-smartphone-page',
  templateUrl: './smartphone-page.component.html',
  styleUrls: ['./smartphone-page.component.css']
})
export class SmartphonePageComponent implements OnInit {

  singleProduct: IProduct;
  public host: string ="http://localhost:8080";
  constructor() {
    this.singleProduct = history.state.product
  }

  ngOnInit(): void {
  }

}
