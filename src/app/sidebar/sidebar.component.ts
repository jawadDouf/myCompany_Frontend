import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    
  unitsDropDown:boolean=false;




  showUnitsDropDown(){
    this.unitsDropDown=!this.unitsDropDown;
  }
}
