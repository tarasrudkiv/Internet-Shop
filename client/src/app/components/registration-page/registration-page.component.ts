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

  user: IUser ={
    username:"",
    password:"",
    role:"ROLE_USER"
  };
  admin: IUser ={
    username:"",
    password:"",
    role:"ROLE_ADMIN"
  };

  public saveUser() {
      this.userService.save(this.user).subscribe()
  }
  public saveAdmin() {
    this.userService.save(this.admin).subscribe()
  }
  ngOnInit(): void {
  }

}
