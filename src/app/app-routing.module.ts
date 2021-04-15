import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'germany', pathMatch: 'full'
  },
  {
    path: 'germany',
    loadChildren: () => import('./germany/germany.module').then(m => m.GermanyModule)
  },
  {
    path: 'state',
    loadChildren: () => import('./state/state.module').then(m => m.StateModule)
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
