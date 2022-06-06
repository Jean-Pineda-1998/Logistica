import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


// const URL = 'https://fa-eshh-test-saasfaprod1.fa.ocs.oraclecloud.com/fscmRestApi/resources/11.13.18.05/invoices';
// const URL = environment.url;

// const passWord = environment.passWord;
// const userName = environment.userName;


// const options: any = {

//   headers: new HttpHeaders({
//     ' Content-Type ' : ' aplication/json ',
//     Authorization: 'Basic' + btoa('IntegrationUserERP:icsJurasik$123')
//   }),
//   params: new HttpParams().set

// };

// options.headers = new HttpHeaders({ accept: 'application/json',
//          Authorization: "Basic " + btoa( userName + ":" + passWord),
//          'Content-Type': 'application/json'
// });


@Injectable({
  providedIn: 'root'
})
export class FacturaService {


  // eslint-disable-next-line @typescript-eslint/naming-convention


  constructor( private http: HttpClient) {

  }

  // postFactura(): Observable<any> {

  //   return this.http.post(`${URL}/fscmRestApi/resources/11.13.18.05/invoices?grant_type=password&userName='IntegrationUserERP'&passWord='icsJurasik$123`, {});

  //   // this.http.post(URL, options)
  //   // .subscribe(res => {

  //   // console.log(res['_body']);

  //   //  }, (err) => {
  //   //     console.log("Somthing went wrong!"+err);
  //   //     });


  // }




  }





