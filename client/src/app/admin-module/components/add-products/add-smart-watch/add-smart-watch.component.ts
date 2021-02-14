import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../../../product-module/models/productModel";
import {ProductService} from "../../../../product-module/services/product.service";

@Component({
  selector: 'app-add-smart-watch',
  templateUrl: './add-smart-watch.component.html',
  styleUrls: ['./add-smart-watch.component.css']
})
export class AddSmartWatchComponent implements OnInit {
  smartWatch: IProduct =
    {
      name: '',
      description: '',
      price: 0,
      status: '',
      category: 'smartWatch',
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
          componentName: 'memory',  // ram  name
          component_id: 'memory',
          componentValues: [
            {
              propertyName: 'amount memory',
              propertyValue: ''
            },
            {
              propertyName: 'amount Of RAM memory',
              propertyValue: ''
            }
          ]
        },
        {
          componentName: '',  // monitor  type
          component_id: 'display',
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
            {
              propertyName: 'frame rate',
              propertyValue: ''
            }
          ]
        },
        {
          componentName: '',  // battery type
          component_id: 'battery',
          componentValues: [
            {
              propertyName: 'battery capacity',
              propertyValue: ''
            },

          ]
        },
        {
          componentName: '',  //  operating system name type
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

  save():void{
    const formData: FormData = new FormData();
    formData.append("file",this.image);
    formData.append("product",JSON.stringify(this.smartWatch));
    this.productService.save(formData).subscribe()
  }


  print(): void {
    console.log(this.smartWatch)
  }
  ngOnInit(): void {
  }

}
