import {Component} from '@angular/core';

@Component({
    selector:'sn-header',
    templateUrl:'header.component.html',
    styleUrls:['header.component.css']
})

export class SnHeader{
  title='Swapnil Nakate';
  headerMenu=[{title:'Projects',link:'/projects'},{title:'HireMe',link:'/hireme'},
  {title:'Free Stuff',link:'/freestuff'},{title:'About',link:'/about'}]
}