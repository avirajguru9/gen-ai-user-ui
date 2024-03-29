import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  constructor(private globalService:GlobalService,private route:Router, private auth:AuthenticationService){
    globalService.showFooter=false;
    globalService.showHeader=false;
  }

  errorMessage: any;
  loginFlag = false;
  handleLogin() {
    if(this.auth.authenticate(this.username,this.password)){
        this.route.navigate(['home',this.username]);
        // this.route.navigate(['stocklist']);
    }
    this.loginFlag = true;
    this.errorMessage = "Invalid username or password";
    console.log(this.username);
  }
  username = 'admin_avi';
  password = '';
}
