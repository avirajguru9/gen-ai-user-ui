import { Component } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public globalService:GlobalService){
    globalService.showFooter=true;
    globalService.showHeader=true;
  }
  title = 'Gen AI';
}
