import {IOrderedProduct} from "./orderedProductModel";

export interface IOrderPage {
  orderList: IOrderedProduct[];
  totalElements: number;
  totalPages: number;
  pageSize: number;
}
