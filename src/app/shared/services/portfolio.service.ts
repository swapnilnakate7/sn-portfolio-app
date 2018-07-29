import { Injectable, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProjects } from "../interface/IProjects";
import { EventEmitter } from "events";

@Injectable({
    providedIn: 'root',
  })
export class PortfolioServcie{
   projectsPath:string='assets/json/projects.json';
   skillsPath:string='assets/json/skills.json';
   Path:string='';
   projects:Project[];
  


   constructor(private http:HttpClient){

   }


   getProjects():Observable<IProjects[]>{
       return this.http.get<IProjects[]>(this.projectsPath);
   }

   fetchProjects(){
    this.http.get<IProjects[]>(this.projectsPath).subscribe(
        projects =>{
            this.projects = projects;
            
            console.log('Projects Assigned',this.projects);
        }
    );
   }

   getSkills(){
       return this.http.get(this.skillsPath);
   }
  

}