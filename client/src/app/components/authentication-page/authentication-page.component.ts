import {Component, OnInit} from '@angular/core';
import {IUser} from "../../user-module/model/userModel";
import {UserService} from "../../user-module/services/user.service";
import {Router} from "@angular/router";
import {IAuthentication} from "../../user-module/model/authenticationModel";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.css']
})
export class AuthenticationPageComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  user: IAuthentication = {
    userName: "",
    password: ""
  };
  public login() {
    if (!!localStorage.getItem("token") === true) {
      localStorage.removeItem("token");
      this.userService.generateToken(this.user).subscribe(value => {
          localStorage.setItem("token", value.token);
          localStorage.setItem("userName", this.user.userName);
          this.router.navigate(["userPage"])
        },
        error => {
          alert("Wrong login or password")
        });
    } else {
      this.userService.generateToken(this.user).subscribe(value => {
          localStorage.setItem("token", value.token);
          localStorage.setItem("userName", this.user.userName);
          this.router.navigate(["userPage"])
        },
        error => {
          console.log(error);
          alert("Wrong login or password")
        });
    }
  };

  ngOnInit(): void {
  }

}
