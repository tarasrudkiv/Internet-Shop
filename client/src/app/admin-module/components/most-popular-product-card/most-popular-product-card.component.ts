import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {IMostPopularProduct} from "../../../order-module/models/mostPopularProductModel";

@Component({
  selector: 'app-most-popular-product-card',
  templateUrl: './most-popular-product-card.component.html',
  styleUrls: ['./most-popular-product-card.component.css']
})
export class MostPopularProductCardComponent implements OnInit {
  @Input()
  product: IMostPopularProduct;
  public host: string = "http://localhost:8080";

  constructor(private router: Router) {
  }

  showDetails(id: number) {
    this.router.navigate(['allProducts/product', this.product.productCategory, this.product.productId], {state: {id}})
  }

  ngOnInit(): void {
  }

}
