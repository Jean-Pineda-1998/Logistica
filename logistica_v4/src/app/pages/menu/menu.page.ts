import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Menu',
      url: '/menu/main',
      icon: 'home',
      open: true
    },
    {
      title: 'Trasnferencias',
      children: [
        {
          title: 'Activos',
          url: '/menu/activos',
          icon: 'radio-button-on',
        },
        {
          title: 'Inventarios',
          url: '/menu/inventarios',
          icon: '',
        },
        {
          title: 'ST/OT',
          url: '/menu/st-ot',
          icon: '',
        }
      ],
    },
    {
      title: 'Compras',
      children: [
        {
          title: 'Nacionales',
          url: '/menu/nacionales',
          icon: '',
        },
        {
          title: 'Importadas',
          url: '/menu/importadas',
          icon: '',
        },
      ],
    },
    {
      title: 'Ventas',
      children: [
        {
          title: 'Nacionales',
          url: '/menu/nacionales',
          icon: '',
        },
        {
          title: 'Exportacion',
          url: '/menu/exportacion',
          icon: '',
        },
        {
          title: 'Salida de Inventario',
          url: '/menu/salidas-i',
          icon: '',
        }
      ],
    },
    {
      title: 'Consultas',
      children: [
        {
          title: 'Inventario',
          url: '/menu/inventario',
          icon: '',
        },
        {
          title: 'Imprimir Etiquetas',
          url: '/menu/imprimir-e',
          icon: '',
        },
      ],
    },
    {
      title: 'Factura',
      children: [
        {
          title: 'Factura',
          url: '/menu/factura',
          icon: '',
        }
      ]
    }
  ];

  constructor( private barcodeScanner: BarcodeScanner ) { }

  ngOnInit() {
  }

  scan(){

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
