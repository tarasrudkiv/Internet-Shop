import {Component, OnInit} from '@angular/core';
import {IUser} from "../../model/userModel";


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
