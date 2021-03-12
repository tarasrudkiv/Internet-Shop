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
    username: "",
    password: ""
  };
  loading = null;

  public login() {
    this.loading = 'LOADING...';
    if (!!localStorage.getItem("token") === true) {
      localStorage.removeItem("token");
      this.userService.generateToken(this.user).subscribe(value => {
          localStorage.setItem("token", value.token);
          localStorage.setItem("userName", this.user.username);
          this.loading = '';
          this.router.navigate(["userPage"])
        },
        error => {
          this.loading = null;
          alert("Wrong login or password")
        });
    } else {
      this.userService.generateToken(this.user).subscribe(value => {
          localStorage.setItem("token", value.token);
          localStorage.setItem("userName", this.user.username);
          this.loading = '';
          this.router.navigate(["userPage"])
        },
        error => {
        console.log(error);
          this.loading = null;
          alert("Wrong login or password")
        });
    }
  };

  ngOnInit(): void {
  }

}
