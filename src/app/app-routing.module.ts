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
  },
  {
    path: 'not-found',
    loadChildren: () => import('./_layout/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
