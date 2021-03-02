import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {IOrderedProduct} from "../../models/orderedProductModel";

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
  orders: IOrderedProduct[];
  totalElements: number;
  keyword: string;
  page: number;
  searchType: string;


  constructor(private orderService: OrderService) {
    this.page = 1;
    this.getAllOrders();
  }

  public findOrder() {
    this.orderService.findOrder(this.keyword, 0).subscribe(value => {
      this.orders = value.orderList;
      this.totalElements = value.totalElements;
    });
    this.searchType = "byKeyword";
    this.page = 1

  }

  public getAllOrders() {
    this.orderService.getAllOrders(0).subscribe(value => {
      this.orders = value.orderList;
      this.totalElements = value.totalElements;
      this.searchType = "all";
      this.page = 1
    })
  }

  onPageChange(pageNumber: number) {
    if (this.searchType == "all") {
      this.orderService.getAllOrders(pageNumber - 1).subscribe(value => {
        this.orders = value.orderList;
        this.totalElements = value.totalElements;
      })
    }
    if (this.searchType == "byKeyword") {
      this.orderService.findOrder(this.keyword, pageNumber - 1).subscribe(value => {
        this.orders = value.orderList;
        this.totalElements = value.totalElements;
      });
    }
  }

  ngOnInit(): void {
  }

}
