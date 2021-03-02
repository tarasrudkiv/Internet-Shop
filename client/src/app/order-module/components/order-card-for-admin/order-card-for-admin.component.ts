import {Component, Input, OnInit} from '@angular/core';
import {IOrderedProduct} from "../../models/orderedProductModel";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-order-card-for-admin',
  templateUrl: './order-card-for-admin.component.html',
  styleUrls: ['./order-card-for-admin.component.css']
})
export class OrderCardForAdminComponent implements OnInit {
  public host: string = "http://localhost:8080";
  @Input()
  order: IOrderedProduct;
  status: string;

  constructor(private orderService: OrderService) {
  }

  public setStatus() {
    this.orderService.setStatus(this.status, this.order.id).subscribe()
  }

  ngOnInit(): void {
  }

}
