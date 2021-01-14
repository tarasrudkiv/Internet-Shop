import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IUserPage} from "../model/userPageModel";
import {IUser} from "../model/userModel";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {
  }
  public getAllUsers(page:number): Observable<IUserPage> {
    return (this.httpClient.get<IUserPage>(`http://localhost:8080/user?page=${page}`));
  }
  public getOneUser(id: number): Observable<IUser> {
    return (this.httpClient.get<IUser>(`http://localhost:8080/user/${id}`));
  }
  public save(user: IUser): Observable<IUser> {
    return (this.httpClient.post<IUser>('http://localhost:8080/user',user));
  }

  public update(user: IUser ,id:number): Observable<IUser> {
    return (this.httpClient.put<IUser>(`http://localhost:8080/user/${id}`,user));
  }
  public deleteUser(id: number){
    return (this.httpClient.delete(`http://localhost:8080/user/${id}`).subscribe())
  }
}
