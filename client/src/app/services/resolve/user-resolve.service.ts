import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {IUser} from "../../models/userModel";
import {IUserPage} from "../../models/userPageModel";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUserPage>{
private pageNumber:number;
  constructor(private userService:UserService) {
    this.pageNumber=0;
  }

  resolve(): Observable<IUserPage> {
    return this.userService.getAllUsers(this.pageNumber);
  }
}
