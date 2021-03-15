import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeaderStateService {

  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean> (false);

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }

  constructor(private router : Router) { }

}
