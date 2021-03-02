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
  loading = "";
  currentError: any;

  constructor(private userService: UserService, private router: Router) {
  }

  user: IUser = {
    userName: "",
    password: "",
    phoneNumber: "",
    email: ""
  };

  public saveUser() {
    this.loading = "LOADING...";
    this.userService.save(this.user).subscribe(value => {
      this.loading = "";
      this.router.navigate(["/authentication"])
    }, error => {
      this.currentError = JSON.parse(error.error);
      alert(this.currentError.message);
      this.loading = "";
    })
  }

  ngOnInit(): void {
  }

}
