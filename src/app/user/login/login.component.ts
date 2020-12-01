import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userloggedin = false;
  error = false;
  errorMessage = '';
  dataLoading = false;

  constructor(public afAuth: AngularFireAuth, private backendService: BackendService) {
  }

  ngOnInit(): void {
    // this.userloggedin = true;
    this.getAuthStatus();
  }

  login(loginType, formData?): void {
    this.dataLoading = true;
    // @ts-ignore
    return this.backendService.login(loginType, formData).catch(
      (err) => {
        this.error = true;
        this.errorMessage = err.message;
        console.log(err);
        this.userloggedin = false;
        this.dataLoading = false;
      });
  }

  logout(): Promise<void> {
    this.dataLoading = true;
    return this.backendService.logout().then((success) => {
      this.userloggedin = false;
      this.dataLoading = false;
    });
  }

  getAuthStatus(): void {
    const accessToken = 'accessToken';
    this.dataLoading = true;
    this.backendService.redirectLogin().then(function(result): boolean {
      if (result.credential) {
        console.log(result.credential);
        if (result.credential[accessToken] !== ''){
          return this.userloggedin = true;
        }
        this.dataLoading = false;
      }
    }).catch(
      (err) => {
        this.error = true;
        this.errorMessage = err.message;
        console.log(err);
        this.userloggedin = false;
        this.dataLoading = false;
      });
    this.dataLoading = false;
  }
}
