import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IProduct} from "../../models/productModel";
import {IUser} from "../../models/userModel";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  singleUser: IUser;
  constructor() {
    this.singleUser = history.state.user
  }

  ngOnInit(): void {
  }

}
