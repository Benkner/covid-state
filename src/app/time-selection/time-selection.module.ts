import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../_layout/material/material.module';
import { TimeSelectionRoutingModule } from './time-selection-routing.module';
import { TimeSelectionComponent } from './time-selection.component';

@NgModule({
  declarations: [
    TimeSelectionComponent
  ],
  imports: [
    CommonModule,
    TimeSelectionRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    TimeSelectionComponent
  ]
})
export class TimeSelectionModule { }
