import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {SimpleClient} from '../../models/simple-client';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  form: FormGroup;

  constructor(private api: ApiService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.createEmptyForm();
  }

  private createEmptyForm(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName: ['', Validators.required],
    });
  }

  save(): void {
    this.api.saveClient(this.form.value).subscribe(res => {
      alert('Client added successfully!');
    },
      error => {
        alert('Company already exists!!');
      });
  }
}
