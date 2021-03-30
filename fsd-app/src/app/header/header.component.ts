import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HeaderStateService } from 'src/app/services/header-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public header : HeaderStateService, private router : Router) { }

  ngOnInit(): void {
    this.header.show();
  }

  logoutButton() : void{
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
