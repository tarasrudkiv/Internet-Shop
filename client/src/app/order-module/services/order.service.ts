import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IOrderedProduct} from "../models/orderedProductModel";
import {IOrderPage} from "../models/orderPageModel";
import {IStatisticData} from "../models/statisticDataModel";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) {
  }

  public orderProduct(orderedProduct: IOrderedProduct): Observable<IOrderedProduct> {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.post<IOrderedProduct>("http://localhost:8080/order", orderedProduct, {headers}))
  }

  public getAllOrders(page: number): Observable<IOrderPage> {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.get<IOrderPage>(`http://localhost:8080/order/?page=${page}`, {headers}))
  }

  public getAllOrdersByUserId(userId: number, page: number): Observable<IOrderPage> {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.get<IOrderPage>(`http://localhost:8080/order/${userId}/?page=${page}`, {headers}))
  }

  public getStatisticDataForAllTime(): Observable<IStatisticData> {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.get<IStatisticData>(`http://localhost:8080/order/statistics`, {headers}))
  }

  public getStatisticDataForPeriodOfTime(periodOfTime:string): Observable<IStatisticData> {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.get<IStatisticData>(`http://localhost:8080/order/statistics/${periodOfTime}`, {headers}))
  }

  public findOrderByStatus(status: string, page: number): Observable<IOrderPage> {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.get<IOrderPage>(`http://localhost:8080/order/status/${status}/?page=${page}`, {headers}))
  }

  public findOrderByProductName(productName: string, page: number): Observable<IOrderPage> {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.get<IOrderPage>(`http://localhost:8080/order/productName/${productName}/?page=${page}`, {headers}))
  }

  public setStatus(status: string, id: number): Observable<IOrderedProduct> {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.put<IOrderedProduct>(`http://localhost:8080/order/status/${id}`, status, {headers}))
  }

  public deleteOrder(orderId: number) {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.delete(`http://localhost:8080/order/delete/${orderId}`, {headers}).subscribe())
  }
}
