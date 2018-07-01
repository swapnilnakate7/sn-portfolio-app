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

    ngOnInit(){
     var id = this.route.snapshot.paramMap.get('id');
     this.project = this.projectService.projects[id];
    }

    constructor(private route:ActivatedRoute, private projectService:PortfolioServcie){}

}