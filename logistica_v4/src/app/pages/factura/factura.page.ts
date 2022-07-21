import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/services/factura.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
})
export class FacturaPage implements OnInit {

  public formInvoice: FormGroup;





  constructor( private service: FacturaService,private formBuilder: FormBuilder) { }

  ngOnInit():void{
    this.formInvoice = this.formBuilder.group( {
      InvoiceNumber: [''],
      InvoiceCurrency: ['' , [Validators.minLength( 3 )]],
      PaymentCurrency: ['', [Validators.minLength( 3 )]],
      InvoiceAmount: [''],
      InvoiceDate: [''],
      BusinessUnit: [''],
      Supplier: [''],
      SupplierSite: [''],

    });


  }

createInvoice(){

  const data = {
    InvoiceNumber:this.formInvoice.value.InvoiceNumber,
    InvoiceCurrency:this.formInvoice.value.InvoiceCurrency,
    PaymentCurrency:this.formInvoice.value.PaymentCurrency,
    InvoiceAmount:this.formInvoice.value.InvoiceAmount,
    InvoiceDate:this.formInvoice.value.InvoiceDate,
    BusinessUnit:this.formInvoice.value.BusinessUnit,
    Supplier:this.formInvoice.value.Supplier,
    SupplierSite:this.formInvoice.value.SupplierSite

  }


  //this.service.postFactura(data);

  console.log(this.service.postFactura(data));




}

send(): any{

  console.log(this.formInvoice.value);



}



}
