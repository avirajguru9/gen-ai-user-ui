import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  constructor(
    private globalService:GlobalService,
    private route:ActivatedRoute,
    private router:Router,
    ){
    globalService.showFooter=true;
    globalService.showHeader=true;
  }
}
