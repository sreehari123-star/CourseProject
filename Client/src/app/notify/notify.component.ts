import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { StatusModel } from '../shared/status.model';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {

  status : StatusModel[];
  
  constructor( private userService : UserService) { }

  ngOnInit(): void {

    this.userService.getStatus().subscribe((data) =>{
      this.status = JSON.parse(JSON.stringify(data));
    })
  }
}
