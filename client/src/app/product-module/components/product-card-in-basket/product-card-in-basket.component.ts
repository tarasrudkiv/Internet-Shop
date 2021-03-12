import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../models/productModel";
import {IProductInBasket} from "../../../models/productInBasketModel";

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

  constructor() {
  }

  showDetails() {
    this.productSelected.emit();
  }

  removeProduct() {
    this.productDeleted.emit()
  }
  ngOnInit(): void {
  }

}
