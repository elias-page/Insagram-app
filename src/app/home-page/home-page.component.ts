import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  login() {
    (<any>window).location = "https://facebook.com";
  }
  signup() {
    (<any>window).location = "https://www.instagram.com/accounts/login/?hl=en";
  }
}
