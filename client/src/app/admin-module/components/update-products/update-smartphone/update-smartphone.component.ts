import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../../../product-module/models/productModel";
import {ProductService} from "../../../../product-module/services/product.service";

@Component({
  selector: 'app-update-smartphone',
  templateUrl: './update-smartphone.component.html',
  styleUrls: ['./update-smartphone.component.css']
})
export class UpdateSmartphoneComponent implements OnInit {
  productForUpdate: IProduct;
  image: File = null;
  imgURL: any = null;
  loading: string = null;
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
  public updateProduct() {
    this.loading = "LOADING...";
    const formData: FormData = new FormData();
    formData.append("file", this.image);
    formData.append("product", JSON.stringify(this.productForUpdate));
    this.productService.update(formData, this.productForUpdate.id).subscribe(value => {
      this.productForUpdate = value;
      this.loading = null;
      this.image = null;
      this.imgURL = null;
      alert('Success')
    }, error => {
      this.image = null;
      this.imgURL = null;
      this.loading = null;
      alert(error.error.message)
    });
  }
  ngOnInit(): void {
  }

}
