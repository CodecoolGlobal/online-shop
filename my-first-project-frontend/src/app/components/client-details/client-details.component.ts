import { Component, OnInit } from '@angular/core';
import {Client} from '../../models/client';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  client$: Observable<Client>;
  selectedId: string;

  constructor(private route: ActivatedRoute,
              private api: ApiService
              ) { }

  ngOnInit(): void {
    this.client$ = this.route.paramMap.pipe(
        switchMap(params => {
          return this.api.getClientById(params.get('id'));
        }));
  }

}
