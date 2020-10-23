import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaePage } from './tae.page';

const routes: Routes = [
  {
    path: '',
    component: TaePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaePageRoutingModule {}
