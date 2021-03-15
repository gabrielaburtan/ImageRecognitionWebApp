import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  constructor(private http: HttpClient) { }

  get(URL: string): Observable<any> {
    return this.http.get(URL)
  }

  post(data: {}, URL: string): Observable<any> {
    return this.http.post(URL, {
      'data': data,
    })
  }

}
