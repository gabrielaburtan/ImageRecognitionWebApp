import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeaderStateService {

  events : boolean;
  //events = new EventEmitter<boolean>();

  constructor() { this.events = false }

  show() {
     this.events = true;
  }

  hide() {
    this.events = false;
  }

}
