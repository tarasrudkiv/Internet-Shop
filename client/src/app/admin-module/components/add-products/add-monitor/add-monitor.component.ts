import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../../../product-module/models/productModel";
import {ProductService} from "../../../../product-module/services/product.service";

@Component({
  selector: 'app-add-monitor',
  templateUrl: './add-monitor.component.html',
  styleUrls: ['./add-monitor.component.css']
})
export class AddMonitorComponent implements OnInit {

  monitor: IProduct =
    {
      name: '',
      description: '',
      price: 0,
      status: '',
      category: 'monitor',
      components: [
        {
          componentName: '',  // monitor  type
          component_id: 'monitor',
          componentValues: [
            {
              propertyName: 'screen diagonal',
              propertyValue: ''
            },
            {
              propertyName: 'screen extension',
              propertyValue: ''
            },
            {
              propertyName: 'frame rate',
              propertyValue: ''
            },
            {
              propertyName:'display brightness',
              propertyValue: ''
            },
            {
              propertyName: 'display contrast',
              propertyValue: ''
            },
            {
              propertyName:  'Matrix reaction time',
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
    formData.append("product",JSON.stringify(this.monitor));
    this.productService.save(formData).subscribe()
  }


  print(): void {
    console.log(this.monitor)
  }
  ngOnInit(): void {
  }

}