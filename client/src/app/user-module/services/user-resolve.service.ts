import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {IUserPage} from '../model/userPageModel';


@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUserPage> {
   pageNumber: number;

  constructor(private userService: UserService) {
    this.pageNumber = 0;
  }

  resolve(): Observable<IUserPage> {
    return this.userService.getAllUsers(this.pageNumber);
  }
}
