import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { StatusModel } from '../shared/status.model';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  constructor( private userService : UserService, private router : Router) { }

  statusItem = new StatusModel(null, null, null, null);
  // statusIcon = [
  //     {"ID":"1","Value":"✓"},
  //   {"ID":"0","Value":"X"}
  // ];

  ngOnInit(): void {
  }

  AddStatus()
{
  this.userService.newStatus(this.statusItem);
  console.log("Called");
  alert("Success");
  this.router.navigate(['/professor/studlist']);
}

}
