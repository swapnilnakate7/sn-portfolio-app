import {RouterModule, Route, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { SnHeader } from './sn-header/header.component';
import { SnProjects } from './sn-projects/projects.component';
import { SnProject } from './sn-projects/sn-project/project.component';
import { SnHome } from './sn-home/home.component';
import { SnError } from './sn-error/error.component';
import { SnProjectDetail } from './sn-projects/sn-project-detail/project-detail.component';

const routes:Routes=[
    {path:'',component:SnHome},

{path:'projects',component:SnProjects},
{path:'project/:id',component:SnProjectDetail},
{pathMatch:'full', redirectTo:'',path:'hireme'},
{pathMatch:'full', redirectTo:'',path:'about'},
{pathMatch:'full', redirectTo:'',path:'freestuff'},
{path:'**',component:SnError}
];
  


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule  {
}

