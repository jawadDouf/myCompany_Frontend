import { Component } from '@angular/core';
import { Filter } from 'src/app/shared/models/Filter';

@Component({
  selector: 'app-units-page',
  templateUrl: './units-page.component.html',
  styleUrls: ['./units-page.component.css']
})
export class UnitsPageComponent {

  filter : Filter = {
    categories: ["Unit Name","Type"],
    valueToSearchFor: "",
    valueToSortFrom: undefined
  }  

   constructor(){

   }
}
