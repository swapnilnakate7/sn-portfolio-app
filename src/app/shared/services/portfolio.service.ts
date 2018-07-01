import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProjects } from "../interface/IProjects";

@Injectable()
export class PortfolioServcie{
   projectsPath:string='/assets/json/projects.json';
   skillsPath:string='/assets/json/skills.json';
   Path:string='';
   projects:Project[];


   constructor(private http:HttpClient){}


   getProjects():Observable<IProjects[]>{
       return this.http.get<IProjects[]>(this.projectsPath);
   }

   getSkills(){
       return this.http.get(this.skillsPath);
   }


}