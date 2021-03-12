import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {IOrderedProduct} from "../../models/orderedProductModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
  orders: IOrderedProduct[];
  totalElements: number;
  productName: string;
  orderStatus: string;
  page: number;
  searchType: string;


  constructor(private orderService: OrderService, private router: Router) {
    this.page = 1;
    this.getAllOrders();
  }

  public findOrderByProductName() {
    this.orderService.findOrderByProductName(this.productName, 0).subscribe(value => {
      this.orders = value.orderList;
      this.totalElements = value.totalElements;
    });
    this.searchType = "byProductName";
    this.page = 1
  }

  public findOrderByStatus(pageNumber: number, orderStatus: string) {
    this.orderService.findOrderByStatus(orderStatus, 0).subscribe(value => {
      this.orders = value.orderList;
      this.totalElements = value.totalElements;
    });
    this.searchType = "byOrderStatus";
    this.page = 1
  }

  public getAllOrders() {
    this.orderService.getAllOrders(0).subscribe(value => {
      this.orders = value.orderList;
      this.totalElements = value.totalElements;
      this.searchType = "all";
      this.page = 1;
      this.productName = null;
    })
  }

  onPageChange(pageNumber: number) {
    if (this.searchType == "all") {
      this.orderService.getAllOrders(pageNumber - 1).subscribe(value => {
        this.orders = value.orderList;
        this.totalElements = value.totalElements;
      })
    }
    if (this.searchType == "byProductName") {
      this.orderService.findOrderByProductName(this.productName, pageNumber - 1).subscribe(value => {
        this.orders = value.orderList;
        this.totalElements = value.totalElements;
      });
    }
    if (this.searchType == "byOrderStatus") {
      this.orderService.findOrderByStatus(this.orderStatus, pageNumber - 1).subscribe(value => {
        this.orders = value.orderList;
        this.totalElements = value.totalElements;
      });
    }
  }

  toOrderDetails(order: IOrderedProduct) {
    this.router.navigate(["order/orderInfoPage"], {state: {order}})
  }

  ngOnInit(): void {
  }

}
