import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = {username: '', password: ''};
  currentUserName;

  constructor(public loginService: LoginService) {
    this.currentUserName = localStorage.getItem('currentUserName');
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loginService.sendCredential(this.model).subscribe(
      data => {
        localStorage.setItem('token', JSON.parse(JSON.stringify(data))._body);
        this.loginService.sendToken(localStorage.getItem('token')).subscribe(
          () => {
            this.currentUserName = this.model.username;
            localStorage.setItem('currentUserName', this.model.username);
            this.model.username = '';
            this.model.password = '';
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
  }
}
