import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user-module/services/user.service";
import {IUser} from "../../user-module/model/userModel";
import {Router} from "@angular/router";


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  loading = null;
  currentError=null;
  constructor(private userService: UserService, private router: Router) {
  }

  user: IUser = {
    firstName: "",
    lastName: "",
    username: "",
    password: null,
    phoneNumber: "",
    email: ""
  };
  controlPassword = null;
  message = null;

  public checkPassword(password: string) {
    if (password !== null && this.controlPassword !== null) {
      if (password === this.controlPassword) {
        this.message = null
      } else {
        this.message = "Passwords are different"
      }
    }
  }

  public saveUser() {
    this.loading = "LOADING...";
    this.userService.save(this.user).subscribe(value => {
      this.loading = null;
      this.router.navigate(["/authentication"])
    }, error => {
      this.currentError = JSON.parse(error.error);
      alert(this.currentError.message);
      this.loading = null;
      this.loading = null;
    })
  }

  ngOnInit(): void {
  }

}
