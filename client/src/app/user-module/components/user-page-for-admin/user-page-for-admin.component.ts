import {Component, OnInit} from '@angular/core';
import {IUser} from "../../model/userModel";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-page-for-admin',
  templateUrl: './user-page-for-admin.component.html',
  styleUrls: ['./user-page-for-admin.component.css']
})
export class UserPageForAdminComponent implements OnInit {
  singleUser: IUser;
  role: string;
  name:string;
  loading='';

  constructor(private userService: UserService) {
    this.singleUser = history.state.user;
    this.role = this.singleUser.role;
  }

  public isMainAdmin(): boolean {
    return (localStorage.getItem("role") === "ROLE_MAIN_ADMIN")
  }

  changeRole() {
    this.loading='LOADING...';
    if (this.role === "ROLE_USER" || this.role === "ROLE_ADMIN") {
      this.userService.changeRole(this.role, this.singleUser.id).subscribe(value => {
        this.singleUser.role=value.role;
      this.loading='';
      alert("Success")
      });
    } else {
      this.loading='';
      alert("print correct role")
    }
  }
  ngOnInit(): void {
  }

}
