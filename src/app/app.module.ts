import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {SnMaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Route, Routes} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { SnHeader } from './sn-header/header.component';
import { SnFooter } from './sn-footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import { SnProjects } from './sn-projects/projects.component';
import { SnHome } from './sn-home/home.component';
import { SnError } from './sn-error/error.component';
import { PortfolioServcie } from './shared/services/portfolio.service';
import { SnProject } from './sn-projects/sn-project/project.component';
import { SnProjectDetail } from './sn-projects/sn-project-detail/project-detail.component';
import {DialogContentExampleDialog} from './sn-home/dialogue.component';
import {SearchFilter} from './filters/sn-search-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SnHeader,
    SnFooter,
    SnHome,
    SnError,
    SnProjects,
    SnProject,
    SnProjectDetail,
    DialogContentExampleDialog,
    SearchFilter
  ],
  imports: [
    BrowserModule,
    SnMaterialModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
    
  ],
  entryComponents:[DialogContentExampleDialog],
  providers: [PortfolioServcie],
  bootstrap: [AppComponent]
})
export class AppModule { }
