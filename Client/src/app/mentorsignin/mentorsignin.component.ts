import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-mentorsignin',
  templateUrl: './mentorsignin.component.html',
  styleUrls: ['./mentorsignin.component.css']
})
export class MentorsigninComponent implements OnInit {

  user = { uname:'admin',
  password : '1234' }

  constructor( public _auth : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  loginUser()
  {
    this._auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        // this.router.navigate(['/professor/addcourse']);
        this.router.navigate(['/profhome']);
      }
    )
  }
}
