import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private router: Router) {
    this.toAddProductPage()
  }

  ngOnInit(): void {
  }

  toAllOrdersPage(): void {
    this.router.navigate(['/admin/order/allOrders']);
  }

  toAddProductPage(): void {
    this.router.navigate(['/admin/addProduct']);
  }

  toProductDetailsPage(): void {
    this.router.navigate(['/admin/productDetails']);
  }

  toAllUsersPage(): void {
    this.router.navigate(['/admin/allUsers']);
  }
  toStatisticsPage(): void {
    this.router.navigate(['/admin/statistics']);
  }

}
