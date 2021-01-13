import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUserPage} from "../../models/userPageModel";
import {IUser} from "../../models/userModel";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  data: IUserPage;
  users: IUser[];
  totalElements: number;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.data.subscribe(value => this.data = value.allUsers);
    this.users = this.data.usersList;
    this.totalElements = this.data.totalElements;
    console.log(this.users)
  }

  public toUserPage(user: IUser) {
    this.router.navigate(['user', user.id], {state: {user}})
  }

  onPageChange(pageNumber: number) {
    this.userService.getAllUsers(pageNumber - 1).subscribe(value =>
      this.users = value.usersList);
  }

  ngOnInit(): void {
  }

}
