import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PortfolioServcie } from "../../shared/services/portfolio.service";

@Component({
    selector:'sn-project-detail',
    templateUrl:'project-detail.component.html',
    styleUrls:['project-detail.component.scss']
})
export class SnProjectDetail implements OnInit{
    project:Project;
    id:string;
    ngOnInit(){
     this.id = this.route.snapshot.paramMap.get('id');
     if(!this.portfolioService.projects){
        this.portfolioService.getProjects().subscribe(projects =>{
            this.portfolioService.projects = projects;
            this.project = this.portfolioService.projects[this.id];
        })
      
     }else{
         
     this.project = this.portfolioService.projects[this.id];

     }
     
    }
    

    constructor(private route:ActivatedRoute, private portfolioService:PortfolioServcie){
      
        
    }

}