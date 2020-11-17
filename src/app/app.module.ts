import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './shared/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './settings/settings.component';
import {HttpClientModule} from '@angular/common/http';
import {MatIcon, MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SettingsComponent
  ],
  imports: [
    HttpClientModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
