import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProductPage} from "../models/productPageModel";
import {IProduct} from "../models/productModel";
import {IProductInBasket} from "../../models/productInBasketModel";
import {IBasketPage} from "../../models/basketPageModel";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) {
  }

  public getAllProducts(page: number): Observable<IProductPage> {
    return (this.httpClient.get<IProductPage>(`http://localhost:8080/product?page=${page}`));
  }
  public getProductById(id: number): Observable<IProduct> {
    return (this.httpClient.get<IProduct>(`http://localhost:8080/product/id/${id}`));
  }

  public getAllProductsByCategory(page: number, category: string): Observable<IProductPage> {
    return (this.httpClient.get<IProductPage>(`http://localhost:8080/product/${category}/?page=${page}`));
  }

  public getAllProductsByName(page: number, name: string): Observable<IProductPage> {
    return (this.httpClient.get<IProductPage>(`http://localhost:8080/product/name/${name}/?page=${page}`));
  }

  public addToBasket(productForBasket: IProductInBasket): Observable<IProductInBasket> {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.post<IProductInBasket>("http://localhost:8080/basket", productForBasket, {headers}))
  }

  public getProductsFromBasket(userId: number, page: number): Observable<IBasketPage> {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.get<IBasketPage>(`http://localhost:8080/basket/${userId}/?page=${page}`, {headers}))
  }

  public deleteProductFromBasket(id: number) {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.delete(`http://localhost:8080/basket/${id}`, {headers}).subscribe())
  }

  public save(formData: FormData): Observable<FormData> {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.post<FormData>('http://localhost:8080/product', formData, {headers}));
  }

  public update(formData: FormData, id: number): Observable<IProduct> {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR,);
    return (this.httpClient.put<IProduct>(`http://localhost:8080/product/${id}`, formData, {headers}));
  }

  public deleteProduct(id: number) {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.delete(`http://localhost:8080/product/${id}`, {headers}).subscribe())
  }
}
