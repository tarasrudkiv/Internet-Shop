import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../../product-module/models/productModel";
import {IOrderedProduct} from "../../models/orderedProductModel";
import {OrderService} from "../../services/order.service";
import {Router} from "@angular/router";
import {IUser} from "../../../user-module/model/userModel";
import {UserService} from "../../../user-module/services/user.service";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  user: IUser;
  product: IProduct;
  price: number;
  totalPrice: number;
  numberOfProducts: number;
  public host: string = "http://localhost:8080";
  loading: string = null;

  constructor(private orderService: OrderService, private router: Router, private userService: UserService) {
    this.product = history.state.product;
    this.price = this.product.price;
    this.numberOfProducts = 1;
    this.totalPrice = this.price;
    this.userService.getOneUser(localStorage.getItem('userName')).subscribe(value => {
      this.user = value;
      this.orderedProduct.userId = this.user.id;
      this.orderedProduct.firstName = this.user.firstName;
      this.orderedProduct.lastName = this.user.lastName;
      this.orderedProduct.userName = this.user.username;
      this.orderedProduct.userEmail = this.user.email;
      this.orderedProduct.userPhoneNumber = this.user.phoneNumber;
    })

  };

  orderedProduct: IOrderedProduct = {
    productId: null,
    status: 'ordered',
    category: '',
    productName: '',
    numberOfProducts: null,
    productPrice: null,
    totalPrice: null,
    userId: null,
    userName: '',
    firstName: '',
    lastName: '',
    userPhoneNumber: '',
    typeOfDelivery: '',
    userAddress: '',
    userEmail: '',
    additionalInformation: '',
    imageName: ''
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
    this.loading = 'LOADING...';
    this.orderedProduct.category = this.product.category;
    this.orderedProduct.productName = this.product.productName;
    this.orderedProduct.productId = this.product.id;
    this.orderedProduct.numberOfProducts = this.numberOfProducts;
    this.orderedProduct.productPrice = this.price;
    this.orderedProduct.totalPrice = this.totalPrice;
    this.orderedProduct.imageName = this.product.imageName;
    this.orderService.orderProduct(this.orderedProduct).subscribe(value => {
      this.loading = null;
      alert('Success');
      this.router.navigate(['allProducts/product', this.product.category, this.product.id], {state: this.product})
    }, error => {
      this.loading = null;
      alert(error.error.message)
    })

  }

  ngOnInit(): void {
  }

}
