import {Component, OnInit} from '@angular/core';
import {IUser} from "../../model/userModel";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user: IUser;

  constructor(private userService: UserService, private router: Router) {
    this.userService.getOneUser(localStorage.getItem('userName')).subscribe(value => {
      this.user = value;
      localStorage.setItem('role', this.user.role);
    });
  }

  isAdmin(): boolean {
    return (localStorage.getItem('role') === 'ROLE_ADMIN'||localStorage.getItem('role') === 'ROLE_MAIN_ADMIN');
  }

  toAdminPage(): void {
    this.router.navigate(['/userPage/admin']);
  }

  ngOnInit(): void {
  }

}
