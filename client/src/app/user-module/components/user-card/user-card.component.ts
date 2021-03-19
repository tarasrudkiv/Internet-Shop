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

  public isCurrentUserAdmin(): boolean {
    return (localStorage.getItem("role") === "ROLE_ADMIN")
  }

  public isUserAdmin(): boolean {
    return (this.user.role === "ROLE_ADMIN")
  }

  print() {
    console.log(this.role)
  }

  changeRole() {
    this.loading = 'LOADING...';
    if (this.role === "ROLE_USER" || this.role === "ROLE_MANAGER") {
      this.userService.changeRole(this.role, this.user.id).subscribe(value => {
        this.user.role = value.role;
        this.loading = null;
        alert("Success")
      });
    } else {
      this.loading = null;
    }
  }


  ngOnInit(): void {
  }

}
