import { Component } from '@angular/core';
import { Filter } from 'src/app/shared/models/Filter';

@Component({
  selector: 'app-management-landing-page',
  templateUrl: './management-landing-page.component.html',
  styleUrls: ['./management-landing-page.component.css']
})
export class ManagementLandingPageComponent {

  filter : Filter = {
    categories: ["name","email","Prefession","Space","Departement","Status","Phone number","Role"],
    valueToSearchFor: "",
    valueToSortFrom: undefined
  }
  
  constructor(){

  }
}
