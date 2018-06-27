import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PortfolioServcie{
   projectsPath:string='/assets/json/projects.json';
   skillsPath:string='/assets/json/skills.json';
   Path:string='';


   constructor(private http:HttpClient){}

   getProjects(){
       return this.http.get(this.projectsPath);
   }

   getSkills(){
       return this.http.get(this.skillsPath);
   }


}