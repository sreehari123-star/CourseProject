import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseModel } from '../shared/course.model';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor( private userService : UserService, private router : Router) { }
  courseItem = new CourseModel(null, null, null, null, null);

  ngOnInit(): void {
  }
AddCourse()
{
  this.userService.newCourse(this.courseItem);
  console.log("Called");
  alert("Success");
  this.router.navigate(['/user/dashboard']);
}
}
