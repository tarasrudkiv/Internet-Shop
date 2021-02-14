import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user-module/services/user.service";
import {IUser} from "../../user-module/model/userModel";


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  user: IUser = {
    username: "",
    password: "",
    phoneNumber: "",
    email: ""
  };

  public saveUser() {
    this.userService.save(this.user).subscribe()
  }
  ngOnInit(): void {
  }

}
