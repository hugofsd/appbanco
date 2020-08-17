import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagar',
    loadChildren: () => import('./pagar/pagar.module').then( m => m.PagarPageModule)
  },
  {
    path: 'credito',
    loadChildren: () => import('./credito/credito.module').then( m => m.CreditoPageModule)
  },
  {
    path: 'transferencia',
    loadChildren: () => import('./transferencia/transferencia.module').then( m => m.TransferenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
