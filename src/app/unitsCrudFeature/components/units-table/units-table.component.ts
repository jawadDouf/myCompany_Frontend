import { Component } from '@angular/core';
import { Unit } from '../../models/Unit';
import { UnitsService } from '../../services/units.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-units-table',
  templateUrl: './units-table.component.html',
  styleUrls: ['./units-table.component.css']
})
export class UnitsTableComponent {


  units! : Unit[];
  
  constructor(private unitsService : UnitsService,private activatedroute:ActivatedRoute){

  }


  ngOnInit(){

    this.getAllUnits();

  }


  // get all the required units 
  getAllUnits(){
    if(this.activatedroute.snapshot.paramMap.get("unit")! == "SPACE"){
      this.unitsService.getAllSpaces(parseInt(this.activatedroute.snapshot.paramMap.get("id")!)).subscribe({
        next : (res : Unit[]) => {
          this.units = res;
          this.units.forEach((unit : Unit) => {
             unit.unit_type = "SPACE"
          })
        },
         error:error => (console.log(error))
        
      })
    }else if(this.activatedroute.snapshot.paramMap.get("unit")! == "PROFESSION"){
      this.unitsService.getAllProfessions(parseInt(this.activatedroute.snapshot.paramMap.get("id")!)).subscribe({
        next : (res : Unit[]) => {
          this.units = res;
          this.units.forEach((unit : Unit) => {
            unit.unit_type = "PROFESSION"
         })
         console.log(this.units);
         
        },
         error:error => (console.log(error))
        
      })
    }else if(this.activatedroute.snapshot.paramMap.get("unit")! == "DEPARTEMENT"){
      this.unitsService.getAllDepartements(parseInt(this.activatedroute.snapshot.paramMap.get("id")!)).subscribe({
        next : (res : Unit[]) => {
          this.units = res;
          this.units.forEach((unit : Unit) => {
             unit.unit_type = "DEPARTEMENT"
          })
        },
         error:error => (console.log(error))
        
      })
    }else if(this.activatedroute.snapshot.paramMap.get("unit")! == "MinDep"){
      this.unitsService.getAllMineDeps(parseInt(this.activatedroute.snapshot.paramMap.get("id")!)).subscribe({
        next : (res : Unit[]) => {
          this.units = res;
          this.units.forEach((unit : Unit) => {
             unit.unit_type = "MinDep"
             this.units?.push(unit);
          })
        },
         error:error => (console.log(error))   
      })
    }
  }


}
