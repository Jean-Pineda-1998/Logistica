import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StOtPage } from './st-ot.page';

const routes: Routes = [
  {
    path: '',
    component: StOtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StOtPageRoutingModule {}
