import {Component, OnInit} from '@angular/core';
import {IUser} from "../../model/userModel";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  loading = null;
  message = null;
  currentUsername;
  userForUpdate: IUser;

  constructor(private userService: UserService, private router: Router) {
    this.userForUpdate = history.state.user;
    this.currentUsername = this.userForUpdate.username
  }

  public checkUsername() {
    if (this.userForUpdate.username !== this.currentUsername) {
      this.message = "If you change your username, you will have to log in again"
    } else {
      this.message = null;
    }
  }

  public updateUser() {
    this.loading = "LOADING...";
    this.userService.updateUser(this.userForUpdate).subscribe(value => {
      this.userForUpdate = value;
      if (this.userForUpdate.username !== localStorage.getItem("userName")) {
        alert("The username has been changed, you must log in again!");
        this.router.navigate(["/authentication"])
      }
      else {
        localStorage.removeItem("userName");
        localStorage.setItem("userName", value.username);
        this.loading = null;
        alert('Success');
        this.router.navigate(["userPage"])
      }
    }, error => {
      alert(error.error.message);
      this.loading = null;
    })
  }

  ngOnInit(): void {
  }

}
