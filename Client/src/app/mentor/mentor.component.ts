import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { MentorModel } from '../shared/mentor.model';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {

  mentor : MentorModel[];
  constructor(private userService : UserService) { }

  ngOnInit(): void {

    this.userService.getMentor().subscribe((data) =>{
      this.mentor = JSON.parse(JSON.stringify(data));
    }) 
  }
}
