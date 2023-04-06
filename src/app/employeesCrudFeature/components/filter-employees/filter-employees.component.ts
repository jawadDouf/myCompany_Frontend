import { Component, Input } from '@angular/core';
import { Filter } from 'src/app/shared/models/Filter';

@Component({
  selector: 'app-filter-employees',
  templateUrl: './filter-employees.component.html',
  styleUrls: ['./filter-employees.component.css']
})
export class FilterEmployeesComponent {
     
    dropdownFilter:boolean=false;

    @Input() filter! : Filter;
  
    constructor(){}
     
    dropdown(){
      this.dropdownFilter = !this.dropdownFilter
    }
    
}
