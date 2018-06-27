import { Component } from "@angular/core";

@Component({
    selector:'sn-error',
    templateUrl:'error.component.html',
    styleUrls:['error.component.css']

})

export class SnError{
    errorTitle='404';
    errorDescription= 'Whoa....!!';
    
}