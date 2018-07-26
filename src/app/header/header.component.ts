import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  get() {
    (<any>window).location = "https://www.microsoft.com/en-us/p/instagram/9nblggh5l9xt?activetab=pivot%3aoverviewtab";
  }
}
