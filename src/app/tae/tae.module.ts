import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaePageRoutingModule } from './tae-routing.module';

import { TaePage } from './tae.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaePageRoutingModule
  ],
  declarations: [TaePage]
})
export class TaePageModule {}
