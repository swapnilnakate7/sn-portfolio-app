import {Component, OnInit} from '@angular/core';
import { PortfolioServcie } from '../shared/services/portfolio.service';

@Component({
    selector:'sn-projects',
    templateUrl:'projects.component.html',
    styleUrls:['projects.component.css']
})

export class SnProjects implements OnInit{
    title='Projects loaded';
    projects:any=[];

    ngOnInit(){
        this.fetchProjects();
    }
    
    constructor(private ps:PortfolioServcie){}
    
    fetchProjects(){
        this.ps.getProjects()
        .subscribe(data => {
            this.projects = data;
            console.log(data);
        })

        
        
    }

    

}