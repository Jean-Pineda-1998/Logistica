import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StOtPageRoutingModule } from './st-ot-routing.module';

import { StOtPage } from './st-ot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StOtPageRoutingModule
  ],
  declarations: [StOtPage]
})
export class StOtPageModule {}
