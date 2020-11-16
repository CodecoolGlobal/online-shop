import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {AboutComponent} from './shared/about/about.component';

const routes: Route = [
  { path: '', redirectTo: '/about', pathMath: 'full' },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/about', pathMath: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
