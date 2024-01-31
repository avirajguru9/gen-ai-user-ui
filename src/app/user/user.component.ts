import { UserDataService } from './../service/user-data.service';
import { Component } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../global.service';

export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public mobile: number,
    public subscription: boolean
  ) {

  }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userData:User = new User(0,'','',0,false);
  
  constructor(
    private userDataService:UserDataService,
    private route:ActivatedRoute,
    private router:Router,
    private globalService:GlobalService
  ) {
    globalService.showFooter=false;
    globalService.showHeader=false;
   }
  registerUser(){
    console.log("in register user");
    return this.userDataService.createUser(this.userData)
    .subscribe(
      data=>{
        console.log('in register user - '+data);
      }
    );
  }
}
