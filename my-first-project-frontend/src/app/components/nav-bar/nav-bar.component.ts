import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  myLocalStorage;

  constructor(public loginService: LoginService) {
    this.myLocalStorage = localStorage;
  }

  ngOnInit(): void {
  }

  onClick(): void {
    if (this.loginService.checkLogin()) {
      this.loginService.logout();
    }
  }

}
