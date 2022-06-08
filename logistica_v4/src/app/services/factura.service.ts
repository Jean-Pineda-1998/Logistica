import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


const URL = environment.url;
const options: any = {

  headers: new HttpHeaders({
    ' Content-Type ' : ' aplication/json ',
    Authorization: 'Basic' + btoa('IntegrationUserERP:icsJurasik$123')
  }),
  params: new HttpParams().set

};


@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor( private http: HttpClient) {}

  postFactura(): Observable<any> {

    return this.http.post(`${URL}/fscmRestApi/resources/11.13.18.05/invoices`,
     { this: this.http.post(URL, options)
      .subscribe(res => {

      console.log(res['_body']);

       }, (err) => {
          console.log("Somthing went wrong!"+err);
          })

        });
  }

}

// import { Headers } from '@angular/http';

// const URL = 'https://fa-eshh-test-saasfaprod1.fa.ocs.oraclecloud.com/fscmRestApi/resources/11.13.18.05/invoices';

  // options.headers = new HttpHeaders({ accept: 'application/json',
//          Authorization: "Basic " + btoa( userName + ":" + passWord),
//          'Content-Type': 'application/json'
// });

// service2(){
//   const Options = {
//     headers: new HttpHeaders({
//       'Content-Type':  'application/json',
//       'Authorization': 'Basic ' + btoa('username:password')
//     })
//   };
// }
// postFactura():Observable<any>{

//   let headers: Headers = new Headers();
// headers.append('Authorization', 'Basic ' + btoa("Userid:password") );
// headers.append("Content-Type", "application/json");

// let options = new RequestOptions({ headers: headers });
// return this.http.post(this.URL, options)
//   .map((response: Response) => {
//     console.log(response);
//   }).subscribe();
// }
// }


// const passWord = environment.passWord;
// const userName = environment.userName;


// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': 'Basic ' + btoa('IntegrationUserERP:icsJurasik$123')
//   })
// };

// getPosts(): Observable<AObjects[]>{
//   return this.http.get<AObjects[]>(this.postsURL, httpOptions);
// }


