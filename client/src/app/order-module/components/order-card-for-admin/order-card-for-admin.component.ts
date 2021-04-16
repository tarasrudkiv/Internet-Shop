import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IOrderedProduct} from "../../models/orderedProductModel";
import {IProduct} from "../../../product-module/models/productModel";

@Component({
  selector: 'app-order-card-for-admin',
  templateUrl: './order-card-for-admin.component.html',
  styleUrls: ['./order-card-for-admin.component.css']
})
export class OrderCardForAdminComponent implements OnInit {
  url="http://localhost:8080";
  public host: string = "http://localhost:8080";
  @Input()
  order: IOrderedProduct;
  @Output() orderSelected: EventEmitter<IProduct> = new EventEmitter;
  status: string;
  loading = null;

  constructor() {
  }
  showDetails() {
    this.orderSelected.emit();
  }

  ngOnInit(): void {
  }

}
