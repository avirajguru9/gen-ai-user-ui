import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  public chart: any;
  //url = '/assets/chartData.json';
  apiUrl = '../assets/chartData.json';
  constructor(private http: HttpClient) { }
  //chartD = this.http.get<any[]>(`${this.apiUrl}`).subscribe;
  chartD:any = [];
 
  createChart(){  
    this.http.get(this.apiUrl).subscribe((data:any) => {
       console.log(data);
       this.chartD = data;
       console.log(this.chartD);
     });
    
     setTimeout(()=>{      this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart      
      data: this.chartD,
      options: {
        aspectRatio:2.5
      }      
    });
  }, 5000);
    
  }

  ngOnInit(): void {  
    this.createChart();
  }
}

