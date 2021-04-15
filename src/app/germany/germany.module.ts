import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StatisticsModule } from '../statistics/statistics.module';
import { TimeSelectionModule } from '../time-selection/time-selection.module';
import { GermanyRoutingModule } from './germany-routing.module';
import { GermanyComponent } from './germany.component';

@NgModule({
  declarations: [
    GermanyComponent
  ],
  imports: [
    CommonModule,
    GermanyRoutingModule,
    FlexLayoutModule,
    StatisticsModule,
    TimeSelectionModule,
  ]
})
export class GermanyModule { }
