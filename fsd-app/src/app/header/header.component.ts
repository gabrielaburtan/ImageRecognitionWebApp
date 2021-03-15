import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HeaderStateService } from 'src/app/services/header-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean> ;

  constructor(private headerService: HeaderStateService) {
    this.isLoggedIn$ = of(false);
   }

  ngOnInit(): void {
    this.isLoggedIn$ = this.headerService.isLoggedIn;
    console.log(this.headerService.isLoggedIn)
  }

  onLogout(){

  }

}
