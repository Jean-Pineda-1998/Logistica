import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/main',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'main',
        loadChildren: () => import('../../pages/main/main.module').then( m => m.MainPageModule)
      },
      {
        path: 'activos',
        loadChildren: () => import('../../pages/transferencias/activos/activos.module').then( m => m.ActivosPageModule)
      },
      {
        path: 'inventarios',
        loadChildren: () => import('../../pages/transferencias/inventarios/inventarios.module').then( m => m.InventariosPageModule)
      },
      {
        path: 'st-ot',
        loadChildren: () => import('../../pages/transferencias/st-ot/st-ot.module').then( m => m.StOtPageModule)
      },
      {
        path: 'nacionales',
        loadChildren: () => import('../../pages/compras/nacionales/nacionales.module').then( m => m.NacionalesPageModule)
      },
      {
        path: 'importadas',
        loadChildren: () => import('../../pages/compras/importadas/importadas.module').then( m => m.ImportadasPageModule)
      },
      {
        path: 'nacionales',
        loadChildren: () => import('../../pages/ventas/nacionales/nacionales.module').then( m => m.NacionalesPageModule)
      },
      {
        path: 'exportacion',
        loadChildren: () => import('../../pages/ventas/exportacion/exportacion.module').then( m => m.ExportacionPageModule)
      },
      {
        path: 'salidas-i',
        loadChildren: () => import('../../pages/ventas/salidas-i/salidas-i.module').then( m => m.SalidasIPageModule)
      },
      {
        path: 'inventario',
        loadChildren: () => import('../../pages/consultas/inventario/inventario.module').then( m => m.InventarioPageModule)
      },
      {
        path: 'imprimir-e',
        loadChildren: () => import('../../pages/consultas/imprimir-e/imprimir-e.module').then( m => m.ImprimirEPageModule)
      },
      {
        path: 'factura',
        loadChildren: () => import('../../pages/factura/factura.module').then( m => m.FacturaPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
