import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-inventarios',
  templateUrl: './inventarios.page.html',
  styleUrls: ['./inventarios.page.scss'],
})
export class InventariosPage implements OnInit {

  code: any;

  constructor(  private barcodeScanner: BarcodeScanner ) { }

  ngOnInit() {
  }


  scan(){

    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode data', this.code);

     }).catch(err => {
         console.log('Error', err);
     });
  }


}
