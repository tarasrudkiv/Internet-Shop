import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../models/productModel";
import {ProductService} from "../../services/product.service";
import {IProductInBasket} from "../../../models/productInBasketModel";


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProduct;
  @Output() productSelected: EventEmitter<IProduct> = new EventEmitter;
  public host: string = "http://localhost:8080";
  productForBasket: IProductInBasket = {
    productId: null,
    userId: null,
    category: "",
    productName: "",
    status: "",
    price: null,
    imageName: ""
  };
  loading = null;

  constructor(private productService: ProductService) {
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem("token") === true;
  }

  showDetails() {
    this.productSelected.emit();
  }

  public addProductToBasket() {
    this.loading = "LOADING...";
    this.productForBasket.productId = this.product.id;
    this.productForBasket.userId = JSON.parse(localStorage.getItem("id"));
    this.productForBasket.category = this.product.category;
    this.productForBasket.productName = this.product.productName;
    this.productForBasket.status = this.product.status;
    this.productForBasket.price = this.product.price;
    this.productForBasket.imageName = this.product.imageName;

    this.productService.addToBasket(this.productForBasket).subscribe(value => {
      this.loading = null;
    }, error => {
      alert(error.error.message);
      this.loading = null;
    })
  }

  ngOnInit(): void {
  }

}
