import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetStockDataService {

   httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('admin_avi:admin_avi')
    })
  };

  constructor(private http:HttpClient) { }

  apiGetStockDetails(){
    return this.http.get('http://localhost:8080/stocks/getallstock',this.httpOptions).subscribe();
  }
}
