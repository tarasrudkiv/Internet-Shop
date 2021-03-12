import {Component, OnInit} from '@angular/core';
import {IOrderedProduct} from "../../models/orderedProductModel";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-order-info-page',
  templateUrl: './order-info-page.component.html',
  styleUrls: ['./order-info-page.component.css']
})
export class OrderInfoPageComponent implements OnInit {
  order: IOrderedProduct;
  public host: string = "http://localhost:8080";
  status = null;
  loading = null;

  constructor(private orderService: OrderService) {
    this.order = history.state.order;
  }

  public setStatus() {
    this.loading = 'LOADING...';
    this.orderService.setStatus(this.status, this.order.id).subscribe(value => {
      this.order.status = value.status;
      this.loading = null;
      this.status = null;
      alert('Success')
    }, error => {
      this.loading = null;
    })
  }

  ngOnInit(): void {
  }

}
