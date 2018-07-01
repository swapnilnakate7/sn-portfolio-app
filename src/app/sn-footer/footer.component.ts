import {Component} from '@angular/core';

@Component({
    selector:'sn-footer',
    templateUrl:'footer.component.html',
    styleUrls:['footer.component.scss']
})

export class SnFooter{
    copyright='Swapnil Nakate';
    year='2018';
    footerMenu=['Disclaimer','Privacy Policy','About'];
}