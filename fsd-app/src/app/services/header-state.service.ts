import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderStateService {

  events : boolean;
  //events = new EventEmitter<boolean>();

  constructor() { this.events = false }

  show() {
     this.events = true;
     console.log("show header");
  }

  hide() {
    this.events = false;
  }

}
