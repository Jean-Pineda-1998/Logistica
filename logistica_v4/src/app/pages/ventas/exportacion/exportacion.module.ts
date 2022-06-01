import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExportacionPageRoutingModule } from './exportacion-routing.module';

import { ExportacionPage } from './exportacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExportacionPageRoutingModule
  ],
  declarations: [ExportacionPage]
})
export class ExportacionPageModule {}
