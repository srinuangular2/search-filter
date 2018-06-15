import { Component, OnInit } from '@angular/core';
import { PgserService } from '../services/pgser.service';

@Component({
  selector: 'app-pgcom',
  templateUrl: './pgcom.component.html',
  styleUrls: ['./pgcom.component.css']
})
export class PgcomComponent implements OnInit {
  public myarray=[];
  
  numberofpage:number= 10;
  p: number = 1;
  text;

  constructor(private srinu:PgserService) { }

  ngOnInit() {
    this.allcountries();
  }
  allcountries(){
    this.srinu.getclist().subscribe(
    (data)=>{
      
    this.myarray=data.json();
    console.log(this.myarray)
    
    },
    error=>alert(error),
    ()=>console.log("completed service")
    
    )
  }
}
