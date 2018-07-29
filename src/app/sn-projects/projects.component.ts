import {Component, OnInit, ViewChild} from '@angular/core';
import { PortfolioServcie } from '../shared/services/portfolio.service';
import { Router } from '@angular/router';
import {MatInput} from '@angular/material'

@Component({
    selector:'sn-projects',
    templateUrl:'projects.component.html',
    styleUrls:['projects.component.css']
})

export class SnProjects implements OnInit{
    title='Projects loaded';
    projects:Project[]=[];
    searchText='';
    @ViewChild('searchTextInput') input: any;


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
        console.log('f',this.ps.projects);
      this.projects = this.ps.projects;
         
    }

    getInput(){
        this.searchText = this.input.nativeElement.value;
console.log('input',this.input.nativeElement.value);
    }

   
    
    navigateToProject(id){
        //this.router.navigate(['/projects',id]);
    }
    

}