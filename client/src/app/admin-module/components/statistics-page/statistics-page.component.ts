import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../order-module/services/order.service";
import {INumberOfOrdersForEachCategory} from "../../../order-module/models/numberOfOrdersForEachCategoryModel";
import {IMostPopularProduct} from "../../../order-module/models/mostPopularProductMdodel";

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.css']
})
export class StatisticsPageComponent implements OnInit {
  ordersDataList: INumberOfOrdersForEachCategory[];
  productDataList: IMostPopularProduct[];
  totalOrders: number;

  constructor(private orderService: OrderService) {
    this.getStatisticsDataForAllTime();
  }

  public getStatisticsDataForAllTime() {
    this.orderService.getStatisticDataForAllTime().subscribe(value => {
      this.ordersDataList = value.ordersDataList;
      this.productDataList = value.productDataList;
      this.totalOrders = value.totalOrders;
    }, error => alert(error.error.message))
  }

  public getStatisticsDataForPeriodOfTime(periodOfTime: string) {
    this.orderService.getStatisticDataForPeriodOfTime(periodOfTime).subscribe(value => {
      this.ordersDataList = value.ordersDataList;
      this.productDataList = value.productDataList;
      this.totalOrders = value.totalOrders;
    }, error => alert(error.error.message))
  }

  ngOnInit(): void {
  }

}
