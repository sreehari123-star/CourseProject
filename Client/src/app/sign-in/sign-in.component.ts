import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor( public _auth : AuthService, private userService : UserService, private router : Router) { }

  model = {
    email : '',
    password : ''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages : string;
  
  ngOnInit(): void {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/user/userprofile');
  }

  onSubmit(form: NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        // this.router.navigateByUrl('/user/dashboard');
        this.router.navigateByUrl('/studhome');
      },
      err => {
          this.serverErrorMessages = err.error.message;
      }
    );
  }
}
