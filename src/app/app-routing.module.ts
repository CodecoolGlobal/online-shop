import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './shared/about/about.component';
import {SettingsComponent} from './settings/settings.component';
import {AdmintabComponent} from './admin/admintab/admintab.component';
import {ProductComponent} from './user/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'admin', component: AdmintabComponent },
  { path: 'shop', component: ProductComponent },
  { path: '**', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
