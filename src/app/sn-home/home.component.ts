import { Component } from "@angular/core";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material';
import {DialogContentExampleDialog} from './dialogue.component';

@Component({
    selector:'sn-home',
    templateUrl:'home.component.html',
    styleUrls:['home.component.scss']
})

export class SnHome{

    faCoffee = faCoffee;
    constructor(public dialog: MatDialog) {}
    messages=['hey','hi','helloo'];


    openDialog() {
        const dialogRef = this.dialog.open(DialogContentExampleDialog, {
          height: '350px'
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }
}


