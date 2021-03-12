import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../model/userModel';
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input()
  user: IUser;
  role = null;
  loading = null;

  constructor(private userService: UserService) {
  }

  public isCurrentUserMainAdmin(): boolean {
    return (localStorage.getItem("role") === "ROLE_MAIN_ADMIN")
  }

  public isUserMainAdmin(): boolean {
    return (this.user.role === "ROLE_MAIN_ADMIN")
  }

  print() {
    console.log(this.role)
  }

  changeRole() {
    this.loading = 'LOADING...';
    if (this.role === "ROLE_USER" || this.role === "ROLE_ADMIN") {
      this.userService.changeRole(this.role, this.user.id).subscribe(value => {
        this.user.role = value.role;
        this.loading = null;
        alert("Success")
      });
    } else {
      this.loading = null;
      alert("print correct role")
    }
  }


  ngOnInit(): void {
  }

}
