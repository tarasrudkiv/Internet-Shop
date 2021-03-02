import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../models/productModel";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
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

  public setPageNumber(): void { // при зміні типу пошуку відкриває першу сторінку
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
      console.log(this.productName);
      this.products = value.productList;
      this.totalElements = value.totalElements;
      this.searchType = "byName";
      this.setPageNumber()
    })
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem("token") === true;
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
        console.log(this.productName);
        this.products = value.productList;
        this.totalElements = value.totalElements;
      })
    }

  }


  toProductDetails(product: IProduct) {
    this.router.navigate(['allProducts/product', product.category, product.id], {state: {product}})
  }


  ngOnInit(): void {
  }

}
