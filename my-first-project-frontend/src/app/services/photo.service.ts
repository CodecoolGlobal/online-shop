import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {
  }

  getPhotos(): Observable<object> {
    const url = 'http://localhost:8080/photo/allPhotos';
    return this.http.get(url);
  }
}
