import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../../product-module/models/productModel";
import {ProductService} from "../../../product-module/services/product.service";
import {IOrderedProduct} from "../../models/orderedProductModel";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  product: IProduct;
  price: number;
  totalPrice: number;
  numberOfProducts: number;
  public host: string = "http://localhost:8080";
  loading: string = '';

  constructor(private orderService: OrderService) {
    this.product = history.state.product;
    this.price = this.product.price;
    this.numberOfProducts = 1;
    this.totalPrice = this.price
  }

  orderedProduct: IOrderedProduct = {
    productId: null,
    status: 'ordered',
    productName: '',
    numberOfProducts: null,
    productPrice: null,
    totalPrice: null,
    userName: '',
    firstName: '',
    lastName: '',
    userPhoneNumber: '',
    typeOfDelivery: '',
    userAddress: '',
    userEmail: '',
    additionalInformation: '',
    date: ''
  };


  public add() {
    this.numberOfProducts++;
    this.totalPrice = this.price * this.numberOfProducts;
  }

  public subtract() {
    if (this.numberOfProducts > 1) {
      this.numberOfProducts--;
    } else {
      this.numberOfProducts = 1
    }
    this.totalPrice = this.price * this.numberOfProducts;
  }

  public order() {
    this.loading='LOADING...';
 this.orderedProduct.productName=this.product.productName;
    this.orderedProduct.productId = this.product.id;
    this.orderedProduct.numberOfProducts = this.numberOfProducts;
    this.orderedProduct.productPrice = this.price;
    this.orderedProduct.totalPrice = this.totalPrice;
    this.orderedProduct.userName = localStorage.getItem("userName");
    this.orderedProduct.date = JSON.stringify(new Date());
    this.orderService.orderProduct(this.orderedProduct).subscribe(value => {
      this.loading='';
      alert('Success')
    },error => {
      this.loading='';
      alert(error.error.message)
    })

  }
  ngOnInit(): void {
  }

}
