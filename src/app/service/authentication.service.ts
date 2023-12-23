import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  authenticate(username: string,password: any){
    if(username == 'admin_avi'){
        sessionStorage.setItem('authUser',username)
        return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authUser')
    return !(user === null)
  }

  logoutUser(){
    sessionStorage.removeItem('authUser')
  }

}
