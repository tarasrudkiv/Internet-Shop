import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../product-module/services/product.service";
import {IProduct} from "../../product-module/models/productModel";
import {Router} from "@angular/router";
import {IProductInBasket} from "../../models/productInBasketModel";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  products: IProductInBasket[];
  singleProduct: IProduct;
  totalElements: number;
  message: string;


  constructor(private productService: ProductService, private router: Router) {
    this.getProductsFromBasket(0, localStorage.getItem("userName"));
  }

  // toProductDetails(product: IProductInBasket, id: number) {
  //   this.router.navigate(['allProducts/product', product.category, product.id], {state: {id}})
  // }
  toProductDetails(product: IProductInBasket, id: number) {
    this.router.navigate(['allProducts/product', product.category, product.productId], {state: {id}})
  }

  deleteProduct(id: number) {
    this.productService.deleteProductFromBasket(id);
    const findId = (element) => element.id === id;
    let deleteIndex = this.products.findIndex(findId);
    this.products.splice(deleteIndex, 1);
  }

  private getProductsFromBasket(page: number, userName: string) {
    this.productService.getProductsFromBasket(userName, page).subscribe(value => {
      this.products = value.productList;
      this.totalElements = value.totalElements;
    })
  }

  onPageChange(pageNumber: number) {
    this.getProductsFromBasket(pageNumber - 1, localStorage.getItem("userName"));
  }

  ngOnInit(): void {
  }

}
