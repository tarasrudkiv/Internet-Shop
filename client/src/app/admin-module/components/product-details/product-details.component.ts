import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {IProduct} from "../../../product-module/models/productModel";
import {ProductService} from "../../../product-module/services/product.service";


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products: IProduct[];
  totalElements: number;
  productName: string;
  searchType: string;
  category: string;
  page: number;

  constructor(private productService: ProductService, private  router: Router) {
    this.productService.getAllProducts(0).subscribe(value => {
      this.products = value.productList;
      this.totalElements = value.totalElements;
    });
    this.searchType = "all";
    this.page = 1;
  }
  deleteComponent(id: number) {
    this.productService.deleteProduct(id);
    const findId = (element) => element.id === id;
    let deleteIndex = this.products.findIndex(findId);
    this.products.splice(deleteIndex, 1);
  }
  toProductDetails(product: IProduct) {
    this.router.navigate(['admin/update', product.category, product.id], {state: {product}});
  }

  public setPageNumber(): void {
    this.page = 1;
  }

  public getAllProducts() {
    this.productService.getAllProducts(0).subscribe(value => {
      this.products = value.productList;
      this.totalElements = value.totalElements;
      this.searchType = "all";
      this.setPageNumber()
    })
  }

  public getProductByCategory(pageNumber: number, category: string) {
    this.productService.getAllProductsByCategory(pageNumber, category).subscribe(value => {
      this.products = value.productList;
      this.totalElements = value.totalElements;
      this.searchType = "byCategory";
      this.category = category;
      this.setPageNumber()
    })
  }

  public getProductByProductName() {
    this.productService.getAllProductsByName(0, this.productName).subscribe(value => {
      this.products = value.productList;
      this.totalElements = value.totalElements;
      this.searchType = "byName";
      this.setPageNumber()
    })
  }

  onPageChange(pageNumber: number) {
    if (this.searchType == "all") {
      this.productService.getAllProducts(pageNumber - 1).subscribe(value => {
          this.products = value.productList;
          this.totalElements = value.totalElements;
        }
      );
    }
    if (this.searchType == "byCategory") {
      this.productService.getAllProductsByCategory(pageNumber - 1, this.category).subscribe(value => {
        this.products = value.productList;
        this.totalElements = value.totalElements;
      })
    }
    if (this.searchType == "byName") {
      this.productService.getAllProductsByName(pageNumber - 1, this.productName).subscribe(value => {
        this.products = value.productList;
        this.totalElements = value.totalElements;
      })
    }

  }

  ngOnInit(): void {

  }

}
