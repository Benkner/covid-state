import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StatisticsModule } from '../statistics/statistics.module';
import { TimeSelectionModule } from '../time-selection/time-selection.module';
import { MaterialModule } from '../_layout/material/material.module';
import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state.component';

@NgModule({
  declarations: [
    StateComponent
  ],
  imports: [
    CommonModule,
    StateRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    StatisticsModule,
    TimeSelectionModule,
  ]
})
export class StateModule { }
