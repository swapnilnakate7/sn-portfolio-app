import { Component, OnInit, Output } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { PortfolioServcie } from './shared/services/portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  


  ngOnInit(){
    this.portfolioService.getProjects()
    .subscribe(data=>{
      this.portfolioService.projects = data;
      console.log('in main Component',this.portfolioService.projects);
    });
  }

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, 
    public portfolioService:PortfolioServcie) {
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }
}
