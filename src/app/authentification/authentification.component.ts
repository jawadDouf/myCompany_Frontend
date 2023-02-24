import { Component } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {


  switcher:boolean=true;

  changeSwitcher() {
     this.switcher=!this.switcher;  
  }
  
}
