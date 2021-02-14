import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../../models/productModel";

@Component({
  selector: 'app-computer-page',
  templateUrl: './computer-page.component.html',
  styleUrls: ['./computer-page.component.css']
})
export class ComputerPageComponent implements OnInit {
  singleProduct: IProduct;
  public host: string ="http://localhost:8080";
  constructor() {
    this.singleProduct = history.state.product
  }
  ngOnInit(): void {
  }

}
