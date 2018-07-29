import { Component, Input, OnInit } from "@angular/core";
import { PortfolioServcie } from "../../shared/services/portfolio.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector:'sn-project',
    templateUrl:'project.component.html',
    styleUrls:['project.component.scss']
})
export class SnProject implements OnInit{
   @Input('project')project:any;
   projects:Project[]=[];



    constructor(private portfolioService:PortfolioServcie, private router:Router , private route:ActivatedRoute){}

    ngOnInit(){
        this.projects = this.portfolioService.projects;
        if(!this.project){     
            var i = this.route.snapshot.paramMap.get('id');
                this.project=this.portfolioService.projects[i];
        }
    } 

    like(i){
        console.log('i',i);
    this.project.liked = !this.project.liked; 
    console.log('ee',this.portfolioService.projects);
    }
    
    navigate(i){
         
        this.router.navigate(['/project',this.getIndex(i)]);
    }

    getIndex(p){
        let c=0;
        for(let i=0;i<this.projects.length;i++){
           
            if(this.projects[i].title === p.title){
                c++;
                return i;
            }
        }

        if(c === 0){
            return 0;
        }

    }
}