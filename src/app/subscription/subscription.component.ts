import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
  constructor(
    private globalService:GlobalService,
    private route:ActivatedRoute,
    private router:Router,
    ){
    globalService.showFooter=true;
    globalService.showHeader=true;
  }
}
