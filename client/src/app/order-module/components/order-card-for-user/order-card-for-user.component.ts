import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IOrderedProduct} from "../../models/orderedProductModel";
import {OrderService} from "../../services/order.service";
import {IProduct} from "../../../product-module/models/productModel";

@Component({
  selector: 'app-order-card-for-user',
  templateUrl: './order-card-for-user.component.html',
  styleUrls: ['./order-card-for-user.component.css']
})
export class OrderCardForUserComponent implements OnInit {
  public host: string = "http://localhost:8080";
  @Input()
  order: IOrderedProduct;
  status: string;
  @Output() orderDeleted: EventEmitter<IProduct> = new EventEmitter;

  constructor(private orderService: OrderService) {
  }
  public cancelOrder(orderId: number){
    this.orderDeleted.emit()
  }

  ngOnInit(): void {
  }

}
