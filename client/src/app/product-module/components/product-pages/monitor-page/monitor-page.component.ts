import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../../models/productModel";

@Component({
  selector: 'app-monitor-page',
  templateUrl: './monitor-page.component.html',
  styleUrls: ['./monitor-page.component.css']
})
export class MonitorPageComponent implements OnInit {
  singleProduct: IProduct;
  public host: string ="http://localhost:8080";
  constructor() {
    this.singleProduct = history.state.product
  }
  ngOnInit(): void {
  }

}
