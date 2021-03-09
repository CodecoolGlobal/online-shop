import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/reigster/reigster.component';
import {LoginComponent} from './components/login/login.component';
import {ClientListComponent} from './components/client-list/client-list.component';
import {OrderListComponent} from './components/order-list/order-list.component';
import {ClientDetailsComponent} from './components/client-details/client-details.component';
import {OrderFormComponent} from './components/order-form/order-form.component';
import {ClientFormComponent} from './components/client-form/client-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'clients', component: ClientListComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'client', component: ClientDetailsComponent },
  { path: 'order/add', component: OrderFormComponent },
  { path: 'client/add', component: ClientFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
