import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../models/productModel';
import {ActivatedRoute, Router} from "@angular/router";
import {IProductPage} from "../../models/productPageModel";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  data: IProductPage;
  products: IProduct[];
  totalElements: number;

  constructor(private activatedRoute: ActivatedRoute, private  router: Router, private productService: ProductService) {
    this.activatedRoute.data.subscribe(value => this.data = value.allProducts);
    this.products = this.data.productList;
    this.totalElements = this.data.totalElements;
  }

  onPageChange(pageNumber: number) {
    this.productService.getAllProducts(pageNumber - 1).subscribe(value =>
      this.products = value.productList);
  }

  toProductDetails(product: IProduct) {
    this.router.navigate(['allProducts/product', product.id], {state: {product}})
  }

  ngOnInit(): void {
  }

}
