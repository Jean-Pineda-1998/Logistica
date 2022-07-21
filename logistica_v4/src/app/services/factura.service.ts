import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {error} from "protractor";



const URL = environment.url;

const options: any = {

  headers: new HttpHeaders({
    // ' Content-Type ' : ' application/json ',
    Authorization: 'Basic ' + btoa('IntegrationUserERP:icsJurasik$123')
  })
  ,
  params: new HttpParams().set

};



@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor( private http: HttpClient) {}



  postFactura(body: {})  {

    //const rest = '{"InvoiceNumber":"38_Elopez_Jean","InvoiceCurrency":"COP","PaymentCurrency":"COP","InvoiceAmount":"900","InvoiceDate":"2022-05-26T14:59:00-05:00","BusinessUnit":"Unidad_Negocio","Supplier":"Comercial De Empaques Y Papeles S.A.S","SupplierSite":"PRINCIPAL"}';

    console.log(options);
    console.log(body);

    let idFactura = 'GERALD';

    new Promise((resolve) => {
      this.http
        .post(`${URL}/fscmRestApi/resources/11.13.18.05/invoices`,body ,options)
        .subscribe(async (resp) => {
         if (resp != null){
           resolve (true);



       idFactura = resp['InvoiceId'];


       }else{
           resolve (false);

         }
         });

    });
     console.log(idFactura);
      return idFactura;



  }




}
