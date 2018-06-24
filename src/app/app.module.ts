import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SnHeader } from './sn-header/header.component';
import { SnFooter } from './sn-footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import { SnProjects } from './sn-projects/projects.component';
import { SnHome } from './sn-home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SnHeader,
    SnFooter,
    SnHome,
    SnProjects
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
