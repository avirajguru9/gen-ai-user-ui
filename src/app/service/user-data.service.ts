import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { UserList } from '../user-list/user-list.component';
import { API_URL } from '../app.constants';
import { User } from '../user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

   httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type':  'application/json',
      // 'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': 'Basic ' + btoa('admin_avi:admin_avi')
    })
  };

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get<User[]>(`${API_URL}/user/getalluser`);
  }

  getUser(){
    return this.http.get<User[]>(`${API_URL}/user/getalluser`);
  }

  createUser(user:User){
    return this.http.post(`${API_URL}/user/user_register`,user);
  }

}
