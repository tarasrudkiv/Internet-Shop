import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../models/productModel';
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {
  computer: IProduct =
    {
      name: '',
      description: '',
      price: 0,
      status: '',
      category: 'computer',
      components: [
        {
          componentName: '',
          component_id: 'cpu',
          componentValues: [
            {
              propertyName: 'cpu clock speed',
              propertyValue: 0,
            },
            {
              propertyName: 'cpu number Of cores',
              propertyValue: 0,
            }
          ]
        },
        {
          componentName: '',
          component_id: 'graphics card',
          componentValues: [
            {
              propertyName: 'graphics card amount Of video memory',
              propertyValue: 0
            }
          ]
        },
        {
          componentName: '',  // ram  name
          component_id: 'ram',
          componentValues: [
            {
              propertyName: 'amount Of RAM memory',
              propertyValue: 0
            }
          ]
        }
      ],
    };

  constructor(private productService: ProductService) {
  }

  save(): void {
    this.productService.save(this.computer).subscribe();
  }

  print(): void {
    console.log(this.computer)
  }

  ngOnInit(): void {
  }
}
