import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthsGuard implements CanActivate {
  constructor( private _auth : AuthService,
               private router : Router){}
  canActivate():boolean{
    if(this._auth.loggedIn())
      {
        return true
      }
      else{
            this.router.navigate(['/']);
            return false
      }
  }
}