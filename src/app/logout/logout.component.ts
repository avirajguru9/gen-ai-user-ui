import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { audit } from 'rxjs';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private route:Router,private auth:AuthenticationService){}
  
  ngOnInit(){
    this.auth.logoutUser()
    this.route.navigate(['login']);
  }
}
