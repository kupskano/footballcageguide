import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterceptPageRoutingModule } from './intercept-routing.module';

import { InterceptPage } from './intercept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterceptPageRoutingModule
  ],
  declarations: [InterceptPage]
})
export class InterceptPageModule {}
