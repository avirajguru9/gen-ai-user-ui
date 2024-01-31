import { Component } from '@angular/core';
import { UserDataService } from '../service/user-data.service';
import { User } from '../user/user.component';

@Component({
  selector: 'app-stock-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent {
    constructor(
      private userDataService:UserDataService
      ){
  }
  userList: User[] = [];
  id:number = 0;
  userSub:any = '';
  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    return this.userDataService.getAllUsers().subscribe(
      response => {
        console.log(response);
        this.userList = response;
      }
    )
  }

  manageSubscription(id:number,e:any){
    this.userSub = {'subscription':e.target.checked};
    return this.userDataService.updateSubscription(id,this.userSub).subscribe()
  }

} 