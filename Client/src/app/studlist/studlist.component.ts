import { Component, OnInit } from '@angular/core';
import { EnrollModel } from '../shared/enroll.model';
import { UserService } from '../shared/user.service';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-studlist',
  templateUrl: './studlist.component.html',
  styleUrls: ['./studlist.component.css']
})
export class StudlistComponent implements OnInit {

  enroll : EnrollModel[];

  constructor( public _auth : AuthService, private userService : UserService, private router : Router) { }

  ngOnInit(): void {

    this.userService.getEnroll().subscribe((data) =>{
      this.enroll = JSON.parse(JSON.stringify(data));
    })
  }

  deleteStudent(enroll:any)
  {
    this.userService.deleteStudent(enroll._id)
      .subscribe((data) => {
        this.enroll = this.enroll.filter(s => s !== enroll);
        alert("Click Ok to Reject !!")
        this.router.navigate(['/status']);
      });
  }

  setSaving(element, text){
    element.textContent = text;
    element.disabled = true;
    alert('Approved')
  }

}
