import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }
  public logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("role");
    this.router.navigate(['/'])
  }
  public isAuthenticated(): boolean {
    return !!localStorage.getItem("token") === true;
  }
  // public  isLoggedIn():boolean{
  //   return this.isAuthenticated()
  // }


  ngOnInit(): void {
 // this.isAuthenticated()
  }

}
