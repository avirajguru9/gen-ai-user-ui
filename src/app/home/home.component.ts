import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private route:ActivatedRoute){}
  name='';
  ngOnInit(){
    this.name = this.route.snapshot.params['name'];
  }
}
