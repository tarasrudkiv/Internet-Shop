import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {IProduct} from "../../models/productModel";
import {ActivatedRoute, Router} from "@angular/router";
import {IProductPage} from "../../models/productPageModel";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products: IProduct[];
  data: IProductPage;
  totalElements: number;

  constructor(private activatedRoute: ActivatedRoute, private  router: Router, private productService: ProductService) {
    this.activatedRoute.data.subscribe(value => this.data = value.allProducts);
    this.products = this.data.productList;
    this.totalElements = this.data.totalElements;
  }

  deleteComponent(id: number) {
    this.productService.deleteProduct(id);
    const findId = (element) => element.id === id;
    let deleteIndex = this.products.findIndex(findId);
    this.products.splice(deleteIndex, 1);
    this.activatedRoute.data.subscribe(value => this.data = value.allProducts);
    this.totalElements=this.data.totalElements
  }

  onPageChange(pageNumber: number) {
    this.productService.getAllProducts(pageNumber - 1).subscribe(value =>
      this.products = value.productList);
  }

  toProductDetails(product: IProduct) {
    this.router.navigate(['update', product.category, product.id], {state: {product}});
  }

  ngOnInit(): void {

  }

}
