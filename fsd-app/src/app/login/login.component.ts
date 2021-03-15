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
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  submitted = true;

  constructor(private router:Router,private fb: FormBuilder, private userService: UserServiceService,private headerState: HeaderStateService) { }

  ngOnInit(): void {
  }

  validate() {
    if (this.logInForm.valid)
     {
        this.userService.login(this.logInForm.getRawValue()).subscribe(data => {
        this.router.navigate(['/table']);
      }, error => {})
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.logInForm.invalid) {
      return;
    }
    let body = {
      username: this.logInForm.value.username,
      password: this.logInForm.value.password
    };

    if(this.logInForm.valid){
      this.router.navigate(['/table']);
    }
  };
}
