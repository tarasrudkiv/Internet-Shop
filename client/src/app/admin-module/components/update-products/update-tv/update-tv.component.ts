import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../../../product-module/models/productModel";
import {ProductService} from "../../../../product-module/services/product.service";

@Component({
  selector: 'app-update-tv',
  templateUrl: './update-tv.component.html',
  styleUrls: ['./update-tv.component.css']
})
export class UpdateTvComponent implements OnInit {
  productForUpdate: IProduct;
  image: File;
  imgURL: any;
  message: string;
  public host: string = "http://localhost:8080";
  loading: string = '';

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
      this.loading = '';
      alert('Success')
    }, error => {
      this.loading = '';
      alert(error.error.message)
    });
  }
  ngOnInit(): void {
  }

}
