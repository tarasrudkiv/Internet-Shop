import {INumberOfOrdersForEachCategory} from "./numberOfOrdersForEachCategoryModel";
import {IMostPopularProduct} from "./mostPopularProductModel";

export interface IStatisticData {
  ordersDataList: INumberOfOrdersForEachCategory[];
  productDataList: IMostPopularProduct[];
  totalOrders: number;
}
