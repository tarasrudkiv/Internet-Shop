import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.css']
})
export class AddProductPageComponent implements OnInit {

  constructor(private router: Router) {
    this.toAddComputerPage()
  }
  toAddComputerPage(){
    this.router.navigate(['/admin/addProduct/addComputer'])
  }
  toAddConsolePage(){
    this.router.navigate(['/admin/addProduct/addConsole'])
  }
  toAAddSmartphone(){
    this.router.navigate(['/admin/addProduct/addSmartphone'])
  }
  toAddAddLaptop(){
    this.router.navigate(['/admin/addProduct/addLaptop'])
  }
  toAddAddTVPage(){
    this.router.navigate(['/admin/addProduct/addTV'])
  }
  toAddSmartWatchPage(){
    this.router.navigate(['/admin/addProduct/addSmartWatch'])
  }
  toAddMonitorPage(){
    this.router.navigate(['/admin/addProduct/addMonitor'])
  }

  ngOnInit(): void {
  }

}
