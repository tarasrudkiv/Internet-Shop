import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../../../product-module/models/productModel";
import {ProductService} from "../../../../product-module/services/product.service";

@Component({
  selector: 'app-add-smartphone',
  templateUrl: './add-smartphone.component.html',
  styleUrls: ['./add-smartphone.component.css']
})
export class AddSmartphoneComponent implements OnInit {
  smartphone: IProduct =
    {
      name: '',
      description: '',
      price: 0,
      status: '',
      category: 'smartphone',
      components: [
        {
          componentName: '',//0
          component_id: 'cpu',
          componentValues: [
            {
              propertyName: 'cpu clock speed',
              propertyValue: ''
            },
            {
              propertyName: 'cpu number Of cores',
              propertyValue: ''
            }
          ]
        },
        {
          componentName: '',//1
          component_id: 'camera',
          componentValues: [
            {
              propertyName: 'number of cameras',
              propertyValue: ''
            },
            {
              propertyName: 'number of megapixels of the front camera',
              propertyValue: ''
            }
          ]
        },
        {
          componentName: 'memory',//2
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
          componentName: '',  // 3
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
          componentName: '',  // 4
          component_id: 'battery',
          componentValues: [
            {
              propertyName: 'battery capacity',
              propertyValue: ''
            },

          ]
        },
        {
          componentName: '',  //  5
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
    formData.append("product",JSON.stringify(this.smartphone));
    this.productService.save(formData).subscribe()
  }


  print(): void {
    console.log(this.smartphone)
  }
  ngOnInit(): void {
  }

}
