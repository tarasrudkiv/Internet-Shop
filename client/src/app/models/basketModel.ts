import {IProduct} from "../product-module/models/productModel";

export interface IBasket {
  id?: number;
  userName: string;
  product?: IProduct
}
