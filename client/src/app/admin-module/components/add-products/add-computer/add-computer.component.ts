import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../../../product-module/models/productModel";
import {ProductService} from "../../../../product-module/services/product.service";

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {
  computer: IProduct =
    {
      productName: '',
      description: '',
      price: null,
      status: '',
      category: 'computer',
      components: [
        {
          componentName: '',
          component_id: 'cpu',
          componentValues: [
            {
              propertyName: 'cpu clock speed',
              propertyValue: '',
            },
            {
              propertyName: 'cpu number Of cores',
              propertyValue: '',
            }
          ]
        },
        {
          componentName: '',
          component_id: 'graphics card',
          componentValues: [
            {
              propertyName: 'graphics card amount Of video memory',
              propertyValue: ''
            }
          ]
        },
        {
          componentName: '',
          component_id: 'ram',
          componentValues: [
            {
              propertyName: 'amount Of RAM memory',
              propertyValue: ''
            }
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

  save(): void {
    this.loading = 'LOADING...';
    const formData: FormData = new FormData();
    formData.append("file", this.image);
    formData.append("product", JSON.stringify(this.computer));
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
