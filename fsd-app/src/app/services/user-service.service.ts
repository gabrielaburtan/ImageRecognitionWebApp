import { HeaderStateService } from './header-state.service';
import { Injectable } from '@angular/core';
import { RequestServiceService } from './request-service.service';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userInfo: User

  constructor(private request: RequestServiceService, private header : HeaderStateService) {
    this.userInfo = {username: "", password: ""}
  }

  login(data: {}) {

    return this.request.post(data, "history").pipe(
      tap((resp: User) => {
        this.userInfo = resp;this.header.loggedIn.next(true);
      }));
  }

}
