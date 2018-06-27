import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Route, Routes} from '@angular/router';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SnHeader } from './sn-header/header.component';
import { SnFooter } from './sn-footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import { SnProjects } from './sn-projects/projects.component';
import { SnHome } from './sn-home/home.component';
import { SnError } from './sn-error/error.component';
import { PortfolioServcie } from './shared/services/portfolio.service';


@NgModule({
  declarations: [
    AppComponent,
    SnHeader,
    SnFooter,
    SnHome,
    SnError,
    SnProjects
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PortfolioServcie],
  bootstrap: [AppComponent]
})
export class AppModule { }
