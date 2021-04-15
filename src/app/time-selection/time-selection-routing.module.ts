import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeSelectionComponent } from './time-selection.component';

const routes: Routes = [
  {
    path: '', component: TimeSelectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeSelectionRoutingModule { }
