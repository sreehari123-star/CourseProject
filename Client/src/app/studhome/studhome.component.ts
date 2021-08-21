import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { CourseModel } from '../shared/course.model';

@Component({
  selector: 'app-studhome',
  templateUrl: './studhome.component.html',
  styleUrls: ['./studhome.component.css']
})
export class StudhomeComponent implements OnInit {
  userDetails;
  course : CourseModel[];
  
  constructor(private userService : UserService ) { }

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
