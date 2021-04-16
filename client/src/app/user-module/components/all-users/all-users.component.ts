import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {IUser} from '../../model/userModel';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: IUser[];
  totalElements: number;
  userName: string;
  searchType: string;
  page: number;

  constructor(private userService: UserService, private  router: Router) {
    this.userService.getAllUsers(0).subscribe(value => {
      this.users = value.usersList;
      this.totalElements = value.totalElements;
    });
    this.searchType = "all";
    this.page = 1;
  }

  private setPageNumber(): void {
    this.page = 1;
  }

  public toUserPage(user: IUser): void {
    this.router.navigate(['admin/allUsers/user', user.id], {state: {user}});
  }

  public getAllUsers() {
    this.userService.getAllUsers(0).subscribe(value => {
      this.users = value.usersList;
      this.totalElements = value.totalElements;
      this.searchType = "all";
      this.setPageNumber();
      this.userName = null
    })
  }

  public getUserByUserName() {
    this.userService.getAllUsersByUserName(0, this.userName).subscribe(value => {
      this.users = value.usersList;
      this.totalElements = value.totalElements;
      this.searchType = "byName";
      this.setPageNumber()
    })
  }

  onPageChange(pageNumber: number) {
    if (this.searchType == "all") {
      this.userService.getAllUsers(pageNumber - 1).subscribe(value => {
          this.users = value.usersList;
          this.totalElements = value.totalElements;
        }
      );
    }
    if (this.searchType == "byName") {
      this.userService.getAllUsersByUserName(pageNumber - 1, this.userName).subscribe(value => {
        this.users = value.usersList;
        this.totalElements = value.totalElements;
      })
    }
  }


  ngOnInit(): void {
  }

}
