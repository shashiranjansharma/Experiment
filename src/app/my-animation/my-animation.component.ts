import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-animation',
  templateUrl: './my-animation.component.html',
  styleUrls: ['./my-animation.component.css']
})
export class MyAnimationComponent implements OnInit {

 played = false;
 marked = true;
 speed = "10"

 play(){
		
		this.played = true;
  }

  stop(){
		
		this.played = false;
  }

  checkboxclick(){
    this.marked = !this.marked;
  	console.log(this.marked);
  }

  constructor() { 
  }

  ngOnInit() {
  }

}
