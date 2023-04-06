import { Component } from '@angular/core';
import { Filter } from 'src/app/shared/models/Filter';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent {

  filter : Filter = {
    categories: ["name","email","Prefession","Space","Departement","Status","Phone number","Role"],
    valueToSearchFor: "",
    valueToSortFrom: undefined
  }

  constructor(){

  }

}
