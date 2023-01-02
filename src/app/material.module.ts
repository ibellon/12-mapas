import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatCardModule } from '@angular/material/card'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule
  ]
})
export class MaterialModule { }
