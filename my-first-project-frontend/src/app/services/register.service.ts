import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  sendUser(user: User): Observable<any> {
    const url = 'http://localhost:8080/user/register';
    const headers1 = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(url, JSON.stringify(user), {headers: headers1});
  }
}
