import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.css']
})
export class AuthenticationPageComponent implements OnInit {

  constructor() { }
  // user = {
  //   login: "",
  //   password: ""
  // };
  public enter(){
    console.log("aaa");
  }

  ngOnInit(): void {
  }

}
