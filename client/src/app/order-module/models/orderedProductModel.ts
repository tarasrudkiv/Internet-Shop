export interface IOrderedProduct {
  id?: number;
  status: string;
  category: string;
  productId: number;
  productName: string;
  numberOfProducts: number;
  productPrice: number;
  totalPrice: number;
  userId: number;
  userName: string;
  firstName: string;
  lastName: string;
  userPhoneNumber: string;
  typeOfDelivery: string;
  userAddress: string;
  userEmail: string;
  additionalInformation: string;
  date?: string;
}
