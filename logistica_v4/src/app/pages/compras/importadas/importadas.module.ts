import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportadasPageRoutingModule } from './importadas-routing.module';

import { ImportadasPage } from './importadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportadasPageRoutingModule
  ],
  declarations: [ImportadasPage]
})
export class ImportadasPageModule {}
