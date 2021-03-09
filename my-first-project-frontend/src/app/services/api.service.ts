import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../models/client';
import {Order} from '../models/order';
import {SimpleClient} from '../models/simple-client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl + 'client');
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl + 'order');
  }

  getClientById(id: string): Observable<Client> {
    return this.http.get<Client>(this.apiUrl + 'client/' + id);
  }

  getSimpleClients(): Observable<SimpleClient[]> {
    return this.http.get<SimpleClient[]>(this.apiUrl + 'client/simple');
  }

  saveOrder(order: Order): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'order', order);
  }

  saveClient(client: Client): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'client', client);
  }
  deleteOrderById(id: string): Observable<Order> {
    return this.http.delete<Order>(this.apiUrl + 'order/' + id);
  }
}
