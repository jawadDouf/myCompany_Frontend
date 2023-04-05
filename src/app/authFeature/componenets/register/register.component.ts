import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  firstName:string="";
  lastName:string="";
  companyName:string="";
  profession:string="";
  email:string = "";
  password:string="";
  
  @Output()
  sendEvent = new EventEmitter();
  
  
  
  onSwitch(){
    this.sendEvent.emit();
  }
}
