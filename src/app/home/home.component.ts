import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private globalService:GlobalService,private route:ActivatedRoute){
    globalService.showFooter=true;
    globalService.showHeader=true;
  }
  name='';
}
