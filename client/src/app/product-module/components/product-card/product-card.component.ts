import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../models/productModel";


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProduct;
  @Output() productSelected: EventEmitter<IProduct> = new EventEmitter;
  public host: string ="http://localhost:8080";
  public showDetails() {
    this.productSelected.emit();
  }



  constructor() {
  }

  ngOnInit(): void {

  }

}
