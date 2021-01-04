import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute} from "@angular/router";
import {IProduct} from "../../models/productModel";

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
