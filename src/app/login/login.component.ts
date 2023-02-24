import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  
  @Output()
  sendEvent = new EventEmitter();

  onSwitch(){
    this.sendEvent.emit();
  }
}
