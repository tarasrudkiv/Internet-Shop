import { Component, OnInit } from '@angular/core';
import {IUser} from "../../model/userModel";

@Component({
  selector: 'app-user-page-for-admin',
  templateUrl: './user-page-for-admin.component.html',
  styleUrls: ['./user-page-for-admin.component.css']
})
export class UserPageForAdminComponent implements OnInit {
  singleUser: IUser;
  constructor() {
    this.singleUser = history.state.user
  }
  ngOnInit(): void {
  }

}
