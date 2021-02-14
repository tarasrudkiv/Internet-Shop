import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../../../product-module/models/productModel";
import {ProductService} from "../../../../product-module/services/product.service";

@Component({
  selector: 'app-update-monitor',
  templateUrl: './update-monitor.component.html',
  styleUrls: ['./update-monitor.component.css']
})
export class UpdateMonitorComponent implements OnInit {
  productForUpdate: IProduct;
  image: File;
  imgURL: any;
  message: string;
  public host: string = "http://localhost:8080";

  constructor(private productService: ProductService,) {
    this.productForUpdate = history.state.product;
  }

  onSelectFile(event) {
    if (event.target.files.length > 0) {
      let fileType = event.target.files[0].type;
      if (fileType.match("image") == null) {
        this.imgURL = null;
        this.message = "only images are supported";
        return
      } else {
        this.message = "";
        const file = event.target.files[0];
        this.image = file;
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
          this.imgURL = reader.result
        }
      }
    }
  }

  public print() {
    console.log(this.productForUpdate)
  }
  public updateProduct() {
    const formData: FormData = new FormData();
    formData.append("file", this.image);
    formData.append("product", JSON.stringify(this.productForUpdate));
    this.productService.update(formData, this.productForUpdate.id).subscribe();
  }
  ngOnInit(): void {
  }

}
