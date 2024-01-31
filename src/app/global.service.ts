import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {  
  constructor() { }
  showHeader:boolean = true;
  showFooter:boolean = true;
}
