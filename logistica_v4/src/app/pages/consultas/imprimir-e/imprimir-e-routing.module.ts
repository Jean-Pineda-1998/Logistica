import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImprimirEPage } from './imprimir-e.page';

const routes: Routes = [
  {
    path: '',
    component: ImprimirEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImprimirEPageRoutingModule {}
