import {Component, OnInit} from '@angular/core';
import {IUser} from "../../models/userModel";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  message = '';
  controlPassword: any;
  user: IUser = {
    name: '',
    surname: '',
    password: '',
    email: '',
    phoneNumber: null,
  };

  public saveUser() {
    if (this.controlPassword !== this.user.password) {
      this.message = "passwords do not match"
    } else {
      this.userService.save(this.user).subscribe()
    }

  }
  ngOnInit(): void {
  }

}
