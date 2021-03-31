import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { HeaderStateService } from '../services/header-state.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  public token: string = '';

  constructor(private router:Router, private userService: UserServiceService,private headerState: HeaderStateService) { }

  ngOnInit(): void {
    this.headerState.hide();
  }

  onSubmit() {
    this.userService.login(this.logInForm.getRawValue())
    .subscribe(data => {
      localStorage.setItem('authToken', data.token);

      this.token = data.token;
      this.router.navigate(['table']);
      this.headerState.show();
    }, err => {
      alert(err.message)
    });
  };
}
