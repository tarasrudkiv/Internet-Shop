import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../../models/productModel";

@Component({
  selector: 'app-smart-watch-page',
  templateUrl: './smart-watch-page.component.html',
  styleUrls: ['./smart-watch-page.component.css']
})
export class SmartWatchPageComponent implements OnInit {
  singleProduct: IProduct;
  public host: string ="http://localhost:8080";
  constructor() {
    this.singleProduct = history.state.product
  }
  ngOnInit(): void {
  }

}
