import {IProduct} from "./productModel";

export interface IProductPage {
  productList:IProduct[];
  totalElements:number;
  totalPages:number;
  pageSize:number;
}
