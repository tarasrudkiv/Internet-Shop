import {IProductInBasket} from "./productInBasketModel";

export interface IBasketPage {
  productList:IProductInBasket[];
  totalElements:number;
  totalPages:number;
  pageSize:number;
}
