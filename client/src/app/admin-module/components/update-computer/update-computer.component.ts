import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../../product-module/models/productModel";
import {ProductService} from "../../../product-module/services/product.service";


@Component({
  selector: 'app-update-computer',
  templateUrl: './update-computer.component.html',
  styleUrls: ['./update-computer.component.css']
})
export class UpdateComputerComponent implements OnInit {
  productForUpdate: IProduct;
  constructor(private productService: ProductService,)
  {
    this.productForUpdate = history.state.product;
  }
  public print(){
    console.log(this.productForUpdate)
  }
  public updateComputer(){
    this.productService.update(this.productForUpdate,this.productForUpdate.id).subscribe()
  }
  ngOnInit(): void {
  }
}
