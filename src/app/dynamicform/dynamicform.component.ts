import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit {
  i=0;
  page = [];
  myValue = [];
  onNext(){
  		this.myValue.push(this.myValue[this.i]);
  		console.log(this.myValue[this.i]);
  		this.i++;
  	}
  	onPrevious(){
  			this.i--;
  		}
  
  constructor() {
  	if(this.i==0){
  		 	alert("Don't click Previous button");
  		}
  }

  ngOnInit() {
  }

}
