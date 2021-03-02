import {Component, OnInit} from '@angular/core';
import {IOrderedProduct} from "../../models/orderedProductModel";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders: IOrderedProduct[];
  totalElements: number;

  constructor(private  orderService: OrderService) {
    this.getAllOrdersByUserName(1)
  }

  private getAllOrdersByUserName(pageNumber: number) {
    this.orderService.getAllOrdersByUserName(localStorage.getItem("userName"), pageNumber - 1).subscribe(value => {
      this.orders = value.orderList;
      this.totalElements = value.totalElements;
    })

  }

  deleteOrder(id: number) {
    this.orderService.deleteOrder(id);
    const findId = (element) => element.id === id;
    let deleteIndex = this.orders.findIndex(findId);
    this.orders.splice(deleteIndex, 1);
  }

  onPageChange(pageNumber: number) {
    this.getAllOrdersByUserName(pageNumber)
  }

  ngOnInit(): void {
  }

}
