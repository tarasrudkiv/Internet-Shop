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
  public getAllProducts(page:number): Observable<IProductPage> {
    return (this.httpClient.get<IProductPage>(`http://localhost:8080/product?page=${page}`));
  }
  public save(product: IProduct): Observable<IProduct> {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.post<IProduct>('http://localhost:8080/product',product,{headers}));
  }

  public update(product: IProduct ,id:number): Observable<IProduct> {
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.put<IProduct>(`http://localhost:8080/product/${id}`,product,{headers}));
  }
  public deleteProduct(id: number){
    let token = localStorage.getItem("token");
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenSTR);
    return (this.httpClient.delete(`http://localhost:8080/product/${id}`,{headers}).subscribe())
  }
}
