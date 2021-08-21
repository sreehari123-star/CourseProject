import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  constructor(public _auth : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  logoutUser()
  {
    localStorage.removeItem('token')
    this.router.navigate(['/mentorsignin'])
  }
}
