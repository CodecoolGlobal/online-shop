import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {RegisterComponent} from './components/reigster/reigster.component';
import { LoginComponent } from './components/login/login.component';
import {ClientListComponent} from './components/client-list/client-list.component';
import {OrderListComponent} from './components/order-list/order-list.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { ClientFormComponent } from './components/client-form/client-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    ClientListComponent,
    OrderListComponent,
    ClientDetailsComponent,
    OrderFormComponent,
    ClientFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
