import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IUserPage} from '../model/userPageModel';
import {IUser} from '../model/userModel';
import {IToken} from '../../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {
  }

  public getAllUsers(page: number): Observable<IUserPage> {
    let token = localStorage.getItem('token');
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenSTR);
    return (this.httpClient.get<IUserPage>(`http://localhost:8080/user?page=${page}`, {headers}));
  }

  public getOneUser(name: string): Observable<IUser> {
    let token = localStorage.getItem('token');
    let tokenSTR = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenSTR);
    return (this.httpClient.get<IUser>(`http://localhost:8080/user/${name}`, {headers}));
  }

  public save(user: IUser): Observable<IUser> {
    return (this.httpClient.post<IUser>('http://localhost:8080/user', user, {responseType: 'text' as 'json'}));
  }

  public generateToken(user: IUser): Observable<IToken> {
    return (this.httpClient.post<IToken>('http://localhost:8080/user/authenticate', user, {responseType: 'json'}));
  }


  // public update(user: IUser, id: number): Observable<IUser> {
  //   let token = localStorage.getItem('token');
  //   let tokenSTR = 'Bearer ' + token;
  //   const headers = new HttpHeaders().set('Authorization', tokenSTR);
  //   return (this.httpClient.put<IUser>(`http://localhost:8080/user/${id}`, user, {headers}));
  // }
}
