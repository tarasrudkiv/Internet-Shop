import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../../../product-module/models/productModel";
import {ProductService} from "../../../../product-module/services/product.service";

@Component({
  selector: 'app-add-tv',
  templateUrl: './add-tv.component.html',
  styleUrls: ['./add-tv.component.css']
})
export class AddTVComponent implements OnInit {
  TV: IProduct =
    {
      productName: '',
      description: '',
      price: null,
      status: '',
      category: 'TV',
      components: [
        {
          componentName: '',
          component_id: 'monitor',
          componentValues: [
            {
              propertyName: 'screen diagonal',
              propertyValue: ''
            },
            {
              propertyName: 'screen extension',
              propertyValue: ''
            }
            ,
          ]
        },
        {
          componentName: '',
          component_id: ' operatingSystem',
          componentValues: [
            {
              propertyName: 'operating system version',
              propertyValue: ''
            },

          ]
        }
      ],
    };
  id: number;
  image: File;
  message: string;
  imgURL: any;
  loading: string = '';

  constructor(private productService: ProductService) {
  }

  onSelectFile(event) {
    if (event.target.files.length > 0) {
      let fileType = event.target.files[0].type;
      if (fileType.match("image") == null) {
        this.imgURL = null;
        this.message = "only images are supported";
        return
      } else {
        this.message="";
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

  save(): void {
    this.loading = 'LOADING...';
    const formData: FormData = new FormData();
    formData.append("file", this.image);
    formData.append("product", JSON.stringify(this.TV));
    this.productService.save(formData).subscribe(value => {
        this.loading = '';
        alert('Success')
      },
      error => {
        this.loading = '';
        alert(error.error.message);
      })
  }
  isImageTrue() {
    return(this.image == null)
  }
  ngOnInit(): void {
  }

}
