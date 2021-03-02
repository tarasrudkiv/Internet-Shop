import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../models/productModel";
import {IProductInBasket} from "../../../models/productInBasketModel";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-card-in-basket',
  templateUrl: './product-card-in-basket.component.html',
  styleUrls: ['./product-card-in-basket.component.css']
})
export class ProductCardInBasketComponent implements OnInit {
  @Input() product: IProductInBasket;
  @Output() productSelected: EventEmitter<IProduct> = new EventEmitter;
  @Output() productDeleted: EventEmitter<IProduct> = new EventEmitter;
  public host: string = "http://localhost:8080";

  constructor(private productService: ProductService, private router: Router) {
  }

  showDetails() {
    this.productSelected.emit();
  }

  removeProduct() {
    this.productDeleted.emit()
  }

  orderProduct(product: IProductInBasket) {
    this.router.navigate(["order"], {state: {product}})
  }

  ngOnInit(): void {
  }

}
