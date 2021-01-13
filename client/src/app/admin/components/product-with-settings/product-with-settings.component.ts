import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {IProduct} from "../../models/productModel";
// import {ProductService} from "../../services/product/product.service";
import {Router} from "@angular/router";
import {IProduct} from "../../../models/productModel";

@Component({
  selector: 'app-product-with-settings',
  templateUrl: './product-with-settings.component.html',
  styleUrls: ['./product-with-settings.component.css']
})
export class ProductWithSettingsComponent implements OnInit {
  @Input() product: IProduct;
  @Output() productSelected: EventEmitter<IProduct> = new EventEmitter;
  @Output() productDeleted: EventEmitter<IProduct> = new EventEmitter;



  constructor() {
  }
  public deleteProduct(id: number): void {
    this.productDeleted.emit()
  }

  public openUpdatePage() {
    this.productSelected.emit()
  }

  ngOnInit(): void {
  }

}
