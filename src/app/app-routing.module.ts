import {RouterModule, Route, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { SnHeader } from './sn-header/header.component';
import { SnProjects } from './sn-projects/projects.component';
import { SnHome } from './sn-home/home.component';
import { SnError } from './sn-error/error.component';

const routes:Routes=[
    {path:'',component:SnHome},

{path:'projects',component:SnProjects},
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

