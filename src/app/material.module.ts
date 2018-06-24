
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
 
  imports:[MatButtonModule, MatMenuModule,
    MatToolbarModule, MatTabsModule,
    MatCardModule, MatGridListModule,
    MatIconModule],
  exports:[MatButtonModule, MatMenuModule,
     MatToolbarModule, MatTabsModule,
      MatCardModule,MatGridListModule,
      MatIconModule]
})
export class MaterialModule { }
