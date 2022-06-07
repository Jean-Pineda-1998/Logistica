import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.page.html',
  styleUrls: ['./activos.page.scss'],
})
export class ActivosPage implements OnInit {

  code0: any;
  code1: any;
  code2: any;
  code3: any;
  code4: any;

  constructor( private barcodeScanner: BarcodeScanner  ) {

  }

  ngOnInit() {
  }


  scanBarCode(id) {

    this.barcodeScanner.scan().then(barcodeData => {
        for (var i = 0; i < this.main2.length; i++) {
            if (this.main2[i].id == id) {
                this.main2[i].scannedBarCode = barcodeData.text;
                break;
            }
        }
    }, (err) => {
        console.log('Error: ', err);
    });
}


  scan0(){

    this.barcodeScanner.scan().then(barcodeData => {
      this.code0 = barcodeData.text;
      // console.log('Barcode data', this.code0);

     }).catch(err => {
         console.log('Error', err);
     });
  }
  scan1(){

    this.barcodeScanner.scan().then(barcodeData => {
      this.code1 = barcodeData.text;
      // console.log('Barcode data', this.code1);

     }).catch(err => {
         console.log('Error', err);
     });
  }
  scan2(){

    this.barcodeScanner.scan().then(barcodeData => {
      this.code2 = barcodeData.text;
      // console.log('Barcode data', this.code2);

     }).catch(err => {
         console.log('Error', err);
     });
  }
  scan3(){

    this.barcodeScanner.scan().then(barcodeData => {
      this.code3 = barcodeData.text;
      // console.log('Barcode data', this.code3);

     }).catch(err => {
         console.log('Error', err);
     });
  }

}
