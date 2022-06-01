import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalidasIPageRoutingModule } from './salidas-i-routing.module';

import { SalidasIPage } from './salidas-i.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalidasIPageRoutingModule
  ],
  declarations: [SalidasIPage]
})
export class SalidasIPageModule {}
