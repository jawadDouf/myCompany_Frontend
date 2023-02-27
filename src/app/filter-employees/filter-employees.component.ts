import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-employees',
  templateUrl: './filter-employees.component.html',
  styleUrls: ['./filter-employees.component.css']
})
export class FilterEmployeesComponent {
     
    dropdownFilter:boolean=false;
  
    constructor(){}
     
    dropdown(){
      this.dropdownFilter = !this.dropdownFilter
    }
    
}