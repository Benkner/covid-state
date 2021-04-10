import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GermanyComponent } from './germany/germany.component';
import { StateComponent } from './state/state.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'germany', pathMatch: 'full'
  },
  {
    path: 'germany',
    component: GermanyComponent
  },
  {
    path: 'state',
    component: StateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
