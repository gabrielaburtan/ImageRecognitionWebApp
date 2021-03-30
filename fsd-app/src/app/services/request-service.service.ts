import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  constructor(private http : HttpClient) { }

  baseUrl : string = "http://localhost:3000/"

  post(url : string, body : any) : Observable<any> {
    const headers = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post(this.baseUrl + url, body);
  }


 get(url : string) : Observable<any>{
    const headers = new HttpHeaders({'Content-Type' : 'application/json','Authorization': `Bearer ${localStorage.getItem('authToken')}`});
    return this.http.get(this.baseUrl + url, {headers});
  }
}
