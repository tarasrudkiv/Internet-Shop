import {Component, OnInit} from '@angular/core';
import {IUser} from "../../user-module/model/userModel";
import {UserService} from "../../user-module/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.css']
})
export class AuthenticationPageComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  user: IUser = {
    username: "",
    password: ""
  };
  public login() {
    if (!!localStorage.getItem("token") === true) {
      localStorage.removeItem("token");
      this.userService.generateToken(this.user).subscribe(value => {
          localStorage.setItem("token", value.token);
          localStorage.setItem("userName", this.user.username);
        },
        error => {
          alert("Wrong login or password")
        });
    } else {
      this.userService.generateToken(this.user).subscribe(value => {
          localStorage.setItem("token", value.token);
          localStorage.setItem("userName", this.user.username);
        },
        error => {
          alert("Wrong login or password")
        });
    }
  };
  ngOnInit(): void {
  }

}
