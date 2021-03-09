import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Client} from '../../models/client';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients$: Observable<Client[]>;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.clients$ = this.api.getClients();
  }

}
