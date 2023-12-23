import { Component } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-stock-header',
  templateUrl: './stock-header.component.html',
  styleUrls: ['./stock-header.component.css']
})
export class StockHeaderComponent {
  constructor(public auth:AuthenticationService){

  }
}
