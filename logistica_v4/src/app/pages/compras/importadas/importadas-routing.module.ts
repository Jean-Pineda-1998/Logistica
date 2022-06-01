import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportadasPage } from './importadas.page';

const routes: Routes = [
  {
    path: '',
    component: ImportadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportadasPageRoutingModule {}
