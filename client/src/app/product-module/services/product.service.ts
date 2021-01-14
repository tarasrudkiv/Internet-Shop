import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
  public getOneProduct(id: number): Observable<IProduct> {
    return (this.httpClient.get<IProduct>(`http://localhost:8080/product/${id}`));
  }
  public save(product: IProduct): Observable<IProduct> {
    return (this.httpClient.post<IProduct>('http://localhost:8080/product',product));
  }

  public update(product: IProduct ,id:number): Observable<IProduct> {
    return (this.httpClient.put<IProduct>(`http://localhost:8080/product/${id}`,product));
  }
  public deleteProduct(id: number){
    return (this.httpClient.delete(`http://localhost:8080/product/${id}`).subscribe())
  }
}
