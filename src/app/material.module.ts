
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule,
  MatCardModule, 
  MatGridListModule, 
  MatIconModule, 
  MatMenuModule,
  MatToolbarModule,
  MatTabsModule,
  MatInputModule,
  MatChipsModule,
  MatListModule,
  MatDialogModule } from '@angular/material';


@NgModule({
 
  imports:[MatButtonModule, MatMenuModule,
    MatToolbarModule, MatTabsModule,
    MatCardModule, MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatListModule,
    MatDialogModule],
  exports:[MatButtonModule, MatMenuModule,
     MatToolbarModule, MatTabsModule,
      MatCardModule,MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatChipsModule,
      MatListModule,
      MatDialogModule]
})
export class SnMaterialModule { }
