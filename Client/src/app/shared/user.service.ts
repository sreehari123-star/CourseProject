import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser : User = {
    fullName : '',
    email : '',
    password : '',
    address : '',
    city : '',
    qualification : '',
    institution : ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http : HttpClient) { }

  getMentor(){
    return this.http.get("http://localhost:4000/mentor");
  }
  newMentor(item){
    return this.http.post("http://localhost:4000/mentorsignup",{"mentor":item})
    .subscribe(data => {console.log(data)})
  }
  getStatus(){
    return this.http.get("http://localhost:4000/status");
  }
  newStatus(item)
  {
    return this.http.post("http://localhost:4000/addstatus",{"status":item})
    .subscribe(data => {console.log(data)})
  }
  getEnroll(){
    return this.http.get("http://localhost:4000/enroll");
  }
  newEnroll(item)
  {
    return this.http.post("http://localhost:4000/addenroll",{"enroll":item})
    .subscribe(data => {console.log(data)})
  }
  getCourse(){
    return this.http.get("http://localhost:4000/course");
  }
  newCourse(item)
  {
    return this.http.post("http://localhost:4000/addcourse",{"course":item})
    .subscribe(data => {console.log(data)})
  }
  postUser(user: User){
    return this.http.post("http://localhost:4000/api/register",user,this.noAuthHeader);
  }

  login(authCredentials){
    return this.http.post("http://localhost:4000/api/authenticate",authCredentials,this.noAuthHeader);
  }
  

  getUserProfile() {
    return this.http.get("http://localhost:4000/api/userProfile");
  }

  deleteStudent(id:any)
  {
    return this.http.delete("http://localhost:4000/remove/"+id);
  }
  
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  
  getToken() {
    return localStorage.getItem('token');
  }
  

  deleteToken() {
    localStorage.removeItem('token');
  }
  

  getUserPayload() {
    var token = this.getToken();
    if(token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }


  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if(userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
