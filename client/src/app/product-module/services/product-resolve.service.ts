import {Injectable} from '@angular/core';
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {ProductService} from "./product.service";
import {IProductPage} from "../models/productPageModel";

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<IProductPage> {
  public pageNumber:number;

  constructor(private productService: ProductService) {
    this.pageNumber=0;
  }

  resolve(): Observable<IProductPage> {
    return (
      this.productService.getAllProducts(this.pageNumber)
    );
  }
}
