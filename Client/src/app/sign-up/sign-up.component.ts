import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSuccessMessage : boolean;
  serverErrorMessages : string;

  constructor(public userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

onSubmit(form : NgForm){
  this.userService.postUser(form.value).subscribe(
    res => {
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false,4000);
      this.resetForm(form);
      alert(" Registered Successfully. Remember e-mail and password. ");
      this.router.navigate(['/login']);
    },
    err => {
      if(err.status === 422) {
        this.serverErrorMessages = err.error.join('<br/>');
      }
      else
        this.serverErrorMessages = 'Something went wrong. Please contact admin.';
    }
  );
}

resetForm(form : NgForm) {
  this.userService.selectedUser = {
    fullName : '',
    email : '',
    password : '',
    address : '',
    city : '',
    qualification : '',
    institution : ''
  };
  form.resetForm();
  this.serverErrorMessages = '';
}
}
