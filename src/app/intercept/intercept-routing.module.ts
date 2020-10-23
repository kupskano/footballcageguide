import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterceptPage } from './intercept.page';

const routes: Routes = [
  {
    path: '',
    component: InterceptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterceptPageRoutingModule {}
