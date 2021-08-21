import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { MentorModel } from '../shared/mentor.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.css']
})
export class MentorsignupComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  
  constructor(public userService : UserService, private router : Router) { }

  mentorItem = new MentorModel(null, null, null, null, null, null, null);
  

  ngOnInit(): void {
  }

  AddMentor(form: NgForm)
{
  this.userService.newMentor(this.mentorItem);
  console.log("Called");
  alert("Success");
  this.router.navigate(['/mentorsignin']);
}
}
