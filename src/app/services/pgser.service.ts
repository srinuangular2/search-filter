import { Injectable } from '@angular/core';
import {Http,HttpModule} from '@angular/http';

@Injectable()
export class PgserService {
  url=null;
  constructor(private myname:Http) { }

  getclist(){
    this.url= "https://restcountries.eu/rest/v2/all";
    return this.myname.get(this.url); 
   }

}
