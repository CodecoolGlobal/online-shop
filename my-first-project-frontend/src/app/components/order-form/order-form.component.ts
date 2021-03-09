import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {SimpleClient} from '../../models/simple-client';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  clients$: Observable<SimpleClient[]>;
  form: FormGroup;

  constructor(private api: ApiService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.clients$ = this.api.getSimpleClients();
    this.form = this.createEmptyForm();
  }

  private createEmptyForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      client: ['', Validators.required]
      });
  }

  save(): void {
    this.api.saveOrder(this.form.value).subscribe(res => {
      alert('Order added successfully!');
    });
  }
}
