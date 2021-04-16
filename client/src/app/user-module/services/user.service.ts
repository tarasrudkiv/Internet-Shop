import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IUserPage} from '../model/userPageModel';
import {IUser} from '../model/userModel';
import {IToken} from '../../models/tokenModel';
import {IAuthentication} from "../model/authenticationModel";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {
  }
  url="http://localhost:8080";

  public getAllUsers(page: number): Observable<IUserPage> {
    let token = localStorage.getItem('token');
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenSTR);
    return (this.httpClient.get<IUserPage>(this.url+`/user?page=${page}`, {headers}));
  }

  public getOneUser(name: string): Observable<IUser> {
    let token = localStorage.getItem('token');
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenSTR);
    return (this.httpClient.get<IUser>(this.url + `/user/${name}`, {headers}));
  }

  public save(user: IUser): Observable<IUser> {
    return (this.httpClient.post<IUser>(this.url + '/user', user, {responseType: 'text' as 'json'}));
  }
  public updateUser(user: IUser): Observable<IUser> {
    let token = localStorage.getItem('token');
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenSTR);
    return (this.httpClient.put<IUser>(this.url + `/user/${user.id}`, user, {headers}));
  }

  public generateToken(user: IAuthentication): Observable<IToken> {
    return (this.httpClient.post<IToken>(this.url + '/user/authenticate', user));
  }

  public changeRole(role: string, id: number): Observable<IUser> {
    let token = localStorage.getItem('token');
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenSTR);
    return (this.httpClient.put<IUser>(this.url + `/user/changeRole/${id}`, role, {headers}));
  }

  public getAllUsersByUserName(page: number, name: string): Observable<IUserPage> {
    return (this.httpClient.get<IUserPage>(this.url + `/user/name/${name}/?page=${page}`));
  }

}
