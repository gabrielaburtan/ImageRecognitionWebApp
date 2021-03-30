import { HeaderStateService } from './header-state.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestServiceService } from './request-service.service';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public userData : any;

  constructor(private requestService : RequestServiceService) { }

  login(body : any) : Observable<any> {
    return this.requestService.post("login", body).pipe(
      tap(data => {
        console.log(data);
        this.userData = data;
      })
    )
  }
}
