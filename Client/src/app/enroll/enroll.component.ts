import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollModel } from '../shared/enroll.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  enroll : EnrollModel[];
  constructor(private userService : UserService, private router : Router) { }
  enrollItem = new EnrollModel(null, null, null, null, null);
  

  ngOnInit(): void {  
  }

  AddEnroll()
  {
    this.userService.newEnroll(this.enrollItem);
    console.log("Called");
    alert("Success");
    this.router.navigate(['/mentor/studlist']);
  }
}