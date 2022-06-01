import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImprimirEPageRoutingModule } from './imprimir-e-routing.module';

import { ImprimirEPage } from './imprimir-e.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImprimirEPageRoutingModule
  ],
  declarations: [ImprimirEPage]
})
export class ImprimirEPageModule {}
