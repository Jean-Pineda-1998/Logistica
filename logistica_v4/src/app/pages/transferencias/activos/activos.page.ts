import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.page.html',
  styleUrls: ['./activos.page.scss'],
})
export class ActivosPage implements OnInit {

  code: any;

  constructor( private barcodeScanner: BarcodeScanner  ) { }

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
