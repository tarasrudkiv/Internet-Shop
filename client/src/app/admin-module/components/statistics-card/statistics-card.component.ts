import {Component, Input, OnInit} from '@angular/core';
import {INumberOfOrdersForEachCategory} from "../../../order-module/models/numberOfOrdersForEachCategoryModel";

@Component({
  selector: 'app-statistics-card',
  templateUrl: './statistics-card.component.html',
  styleUrls: ['./statistics-card.component.css']
})
export class StatisticsCardComponent implements OnInit {
  @Input()
  data: INumberOfOrdersForEachCategory;

  constructor() {
  }

  ngOnInit(): void {
  }

}
