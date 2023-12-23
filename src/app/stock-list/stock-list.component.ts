import { Component } from '@angular/core';
import { GetStockDataService } from '../service/get-stock-data.service';

export class StockList {
  constructor(
      public id:string,
      public name:string,
      public price:number,
      public date:Date,
    ){}
}

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})


export class StockListComponent {
    constructor(private getStockDataService:GetStockDataService){
      
    }
    stockList = [
      new StockList('1','cisco',300,new Date()),
      new StockList('2','IBM',400,new Date()),
      new StockList('3','Wipro',300,new Date),
      new StockList('4','CG',300,new Date()),
      // {"id":'1',"name":"cisco","price":300,"date":"20/01/1991"},
      // {"id":'2',"name":"IBM","price":100,"date":"20/01/1995"},
      // {"id":'3',"name":"capgemini","price":120,"date":"20/01/1994"},
    ];

    getStock(){
      console.log(this.getStockDataService.apiGetStockDetails());
    }
}
