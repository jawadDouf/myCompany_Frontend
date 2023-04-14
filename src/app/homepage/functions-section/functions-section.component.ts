import { Component } from '@angular/core';

@Component({
  selector: 'app-functions-section',
  templateUrl: './functions-section.component.html',
  styleUrls: ['./functions-section.component.css']
})
export class FunctionsSectionComponent {

  image1Condition:boolean=true;
  image2Condition:boolean=false;
  image3Condition:boolean=false;
  image4Condition:boolean=false;
  
  constructor(){

  }

  changeCond1(){
    this.image1Condition = !this.image1Condition;
    this.image2Condition = false;
    this.image3Condition = false;
    this.image4Condition = false;

  }

  changeCond2(){
    this.image2Condition = !this.image2Condition;
    this.image1Condition = false;
    this.image3Condition = false;
    this.image4Condition = false;
  }

  changeCond3(){
    this.image3Condition = !this.image3Condition;
    this.image2Condition = false;
    this.image1Condition = false;
    this.image4Condition = false;
  }

  changeCond4(){
    this.image4Condition = !this.image4Condition;
    this.image2Condition = false;
    this.image3Condition = false;
    this.image1Condition = false;
  }
}
