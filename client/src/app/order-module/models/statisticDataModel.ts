import {INumberOfOrdersForEachCategory} from "./numberOfOrdersForEachCategoryModel";
import {IMostPopularProduct} from "./mostPopularProductMdodel";

export interface IStatisticData {
  ordersDataList: INumberOfOrdersForEachCategory[];
  productDataList: IMostPopularProduct[];
  totalOrders: number;
}
