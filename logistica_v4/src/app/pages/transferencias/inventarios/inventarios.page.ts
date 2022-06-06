import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-inventarios',
  templateUrl: './inventarios.page.html',
  styleUrls: ['./inventarios.page.scss'],
})
export class InventariosPage implements OnInit {

  code0: any;
  code1: any;
  code2: any;
  code3: any;
  code4: any;
  code5: any;
  code6: any;

  constructor(  private barcodeScanner: BarcodeScanner ) { }

  ngOnInit() {
  }


  scan0(){

    this.barcodeScanner.scan().then(barcodeData => {
      this.code0 = barcodeData.text;
      console.log('Barcode data', this.code0);

     }).catch(err => {
         console.log('Error', err);
     });
  }
  scan1(){

    this.barcodeScanner.scan().then(barcodeData => {
      this.code1 = barcodeData.text;
      console.log('Barcode data', this.code1);

     }).catch(err => {
         console.log('Error', err);
     });
  }
  scan2(){

    this.barcodeScanner.scan().then(barcodeData => {
      this.code2 = barcodeData.text;
      console.log('Barcode data', this.code2);

     }).catch(err => {
         console.log('Error', err);
     });
  }
  scan3(){

    this.barcodeScanner.scan().then(barcodeData => {
      this.code3 = barcodeData.text;
      console.log('Barcode data', this.code3);

     }).catch(err => {
         console.log('Error', err);
     });
  }
  scan4(){

    this.barcodeScanner.scan().then(barcodeData => {
      this.code4 = barcodeData.text;
      console.log('Barcode data', this.code4);

     }).catch(err => {
         console.log('Error', err);
     });
  }
  scan5(){

    this.barcodeScanner.scan().then(barcodeData => {
      this.code5 = barcodeData.text;
      console.log('Barcode data', this.code5);

     }).catch(err => {
         console.log('Error', err);
     });
  }
  scan6(){

    this.barcodeScanner.scan().then(barcodeData => {
      this.code6 = barcodeData.text;
      console.log('Barcode data', this.code6);

     }).catch(err => {
         console.log('Error', err);
     });
  }


}
