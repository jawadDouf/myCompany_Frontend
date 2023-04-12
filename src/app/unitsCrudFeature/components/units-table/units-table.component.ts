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
  
  minidepcond : boolean = true;

  
  constructor(private unitsService : UnitsService,private activatedroute:ActivatedRoute){

  }


  ngOnInit(){

    
    this.activatedroute.params.subscribe(params => {
         this.getAllUnits(params['unit'],params['id']);
         if(params['unit']=="DEPARTEMENT"){
          this.minidepcond = false;
         }else{
          this.minidepcond = true;
         }
    })

    

  }

  // get all the required units 
  getAllUnits(unitType:string,id:string){
    if(unitType! == "ISPACE"){
      this.unitsService.getAllSpaces(parseInt(id)).subscribe({
        next : (res : Unit[]) => {
          this.units = res;
          this.units.forEach((unit : Unit) => {
             unit.unit_type = "SPACE"
          })
        },
         error:error => (console.log(error))
        
      })
    }else if(unitType! == "SPACE"){
      this.unitsService.getAllProfessions(parseInt(id)).subscribe({
        next : (res : Unit[]) => {
          this.units = res;
          this.units.forEach((unit : Unit) => {
            unit.unit_type = "PROFESSION"
         })
         console.log(this.units);
         
        },
         error:error => (console.log(error))
        
      })
    }else if(unitType! == "PROFESSION"){
      this.unitsService.getAllDepartements(parseInt(id)).subscribe({
        next : (res : Unit[]) => {
          this.units = res;
          this.units.forEach((unit : Unit) => {
             unit.unit_type = "DEPARTEMENT"
          })
        },
         error:error => (console.log(error))
        
      })
    }else if(unitType! == "DEPARTEMENT"){
      this.unitsService.getAllMineDeps(parseInt(id)).subscribe({
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
