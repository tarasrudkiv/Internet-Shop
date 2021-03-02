import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IOrderedProduct} from "../models/orderedProductModel";
import {IOrderPage} from "../models/orderPageModel";

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

  public getAllOrders(page:number): Observable<IOrderPage> {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.get<IOrderPage>(`http://localhost:8080/order/?page=${page}`, {headers}))
  }

  public getAllOrdersByUserName(userName: string, page: number): Observable<IOrderPage> {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.get<IOrderPage>(`http://localhost:8080/order/${userName}/?page=${page}`, {headers}))
  }

  public findOrder(keyword: string, page: number): Observable<IOrderPage> {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.get<IOrderPage>(`http://localhost:8080/order/find/${keyword}/?page=${page}`, {headers}))
  }

  public setStatus(status: string, id: number): Observable<string> {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.put<string>(`http://localhost:8080/order/status/${id}`, status, {headers}))
  }

  public deleteOrder(orderId: number) {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.delete(`http://localhost:8080/order/delete/${orderId}`, {headers}).subscribe())
  }
}
