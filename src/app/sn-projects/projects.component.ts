import {Component, OnInit, ViewChild} from '@angular/core';
import { PortfolioServcie } from '../shared/services/portfolio.service';
import { Router } from '@angular/router';

@Component({
    selector:'sn-projects',
    templateUrl:'projects.component.html',
    styleUrls:['projects.component.css']
})

export class SnProjects implements OnInit{
    title='Projects loaded';
    projects:Project[]=[];



    ngOnInit(){
        this.fetchProjects();
        if(!this.projects){
            this.ps.getProjects()
            .subscribe(projects=>{
             this.projects = this.ps.projects =projects;
            });
        }
    }
    
    constructor(private ps:PortfolioServcie, private router:Router){}
    
    fetchProjects(){
      this.projects = this.ps.projects;
         
    }

   
    
    navigateToProject(id){
        //this.router.navigate(['/projects',id]);
    }
    

}