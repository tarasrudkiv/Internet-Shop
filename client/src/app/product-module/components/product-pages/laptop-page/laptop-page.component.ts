import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../../models/productModel";

@Component({
  selector: 'app-laptop-page',
  templateUrl: './laptop-page.component.html',
  styleUrls: ['./laptop-page.component.css']
})
export class LaptopPageComponent implements OnInit {
  singleProduct: IProduct;
  public host: string ="http://localhost:8080";
  constructor() {
    this.singleProduct = history.state.product
  }
  ngOnInit(): void {
  }

}
