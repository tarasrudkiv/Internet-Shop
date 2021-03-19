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
  role: string;

  constructor(private userService: UserService, private router: Router) {
    this.userService.getOneUser(localStorage.getItem('userName')).subscribe(value => {
      this.user = value;
      localStorage.setItem('role', this.user.role);
      localStorage.setItem('id', JSON.stringify(this.user.id));
      this.role = this.user.role.slice(5);
      this.toBasket();
    }, error => {
      console.log(error);
    });
  }

  isAdminOrManager(): boolean {
    return (localStorage.getItem('role') === 'ROLE_ADMIN' || localStorage.getItem('role') === 'ROLE_MANAGER');
  }

  toAdminPage(): void {
    this.router.navigate(['/userPage/admin']);
  }

  toUpdatePage(user: IUser): void {
    this.router.navigate(['/userPage/updateUser'], {state: {user}});
  }

  toOrdersPage(): void {
    this.router.navigate(['/userPage/order/myOrders']);
  }

  toBasket(): void {
    this.router.navigate(['/userPage/basket']);
  }

  ngOnInit(): void {
  }

}
