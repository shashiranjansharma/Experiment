import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  name = "";
  thought = "";
  savedText ="";
  flag = false;
  pCSS = "none";

  btnClick() {
	this.flag = true;
	console.log(this.flag);
  }

  saveText() {
  	this.savedText = this.thought;
  }
  
  showContent(){
  	console.log(this.pCSS);
  	this.pCSS = "block";
  	console.log(this.pCSS);
  }

  constructor() { 
     console.log(this.flag);
  }

  ngOnInit() {

  }

}
