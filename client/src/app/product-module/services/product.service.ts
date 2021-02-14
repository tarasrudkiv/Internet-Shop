import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProductPage} from "../models/productPageModel";
import {IProduct} from "../models/productModel";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) {
  }

  public getAllProducts(page: number): Observable<IProductPage> {
    return (this.httpClient.get<IProductPage>(`http://localhost:8080/product?page=${page}`));
  }

  public getAllProductsByCategory(page: number, category: string): Observable<IProductPage> {
    return (this.httpClient.get<IProductPage>(`http://localhost:8080/product/${category}/?page=${page}`));
  }
  public getAllProductsByName(page: number, name: string): Observable<IProductPage> {
    return (this.httpClient.get<IProductPage>(`http://localhost:8080/product/name/${name}/?page=${page}`));
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
