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
    path: 'basic-details',
    loadChildren: () => import('./basic-details/basic-details.module').then( m => m.BasicDetailsPageModule)
  },
  {
    path: 'advance-details',
    loadChildren: () => import('./advance-details/advance-details.module').then( m => m.AdvanceDetailsPageModule)
  },
  {
    path: 'scores',
    loadChildren: () => import('./scores/scores.module').then( m => m.ScoresPageModule)
  },
  {
    path: 'score-details',
    loadChildren: () => import('./score-details/score-details.module').then( m => m.ScoreDetailsPageModule)
  },
  {
    path: 'intercept',
    loadChildren: () => import('./intercept/intercept.module').then( m => m.InterceptPageModule)
  },
  {
    path: 'others',
    loadChildren: () => import('./others/others.module').then( m => m.OthersPageModule)
  },
  {
    path: 'tae',
    loadChildren: () => import('./tae/tae.module').then( m => m.TaePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
