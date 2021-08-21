import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { CourseModel } from '../shared/course.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  course : CourseModel[];
  userDetails;
  constructor(private userService : UserService) { }

  ngOnInit(): void {

    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => { }
    );

    this.userService.getCourse().subscribe((data) =>{
      this.course = JSON.parse(JSON.stringify(data));
    })
  }
}
