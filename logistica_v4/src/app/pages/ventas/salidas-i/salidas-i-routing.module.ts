import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalidasIPage } from './salidas-i.page';

const routes: Routes = [
  {
    path: '',
    component: SalidasIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalidasIPageRoutingModule {}
