import { Component } from '@angular/core';
import { Unit } from '../../models/Unit';
import { UnitsService } from '../../services/units.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/authFeature/model/User';
import { EmployeesService } from 'src/app/employeesCrudFeature/services/employees.service';
import { Employee } from 'src/app/employeesCrudFeature/models/Employee';


@Component({
  selector: 'app-units-table',
  templateUrl: './units-table.component.html',
  styleUrls: ['./units-table.component.css']
})
export class UnitsTableComponent {


  units! : Unit[];
  units2! : Unit[];
  
  minidepcond : boolean = true;

  managementCond : boolean = false;

  formAddUnit : boolean = false;

  inputValue = "";

  cdr: any;

  chosenUnit : string | undefined;

  employees : Employee[] | undefined;

  form!: FormGroup;

  spaces! : any[];
  
  constructor(private unitsService : UnitsService,private activatedroute:ActivatedRoute,private router : Router
    ,private formBuilder: FormBuilder,private empService: EmployeesService){

  }

  ngOnInit(){
    
    console.log(this.router.url.split('/')[2]);

    
    
    this.activatedroute.params.subscribe(params => {
         this.getAllUnits(params['unit'],params['id']);
         if(params['unit']=="DEPARTEMENT"){
          this.minidepcond = false;
         }else{
          this.minidepcond = true;
         }

         if(this.router.url.split('/')[2]=='management'){
            this.managementCond = true;
         }else{
           this.managementCond = false;
         }
    })

    this.form = this.formBuilder.group({
      inputValue: '',
      inputValue2: '',
      inputValue3: '',
      unitName : '',
      unitDecription : '',
    });

    this.form.get('inputValue')?.valueChanges.subscribe(value => {
      console.log('Input value changed:', value);
      if(value == "SPACE"){
        this.chosenUnit = value;
      }else if(value == "PROFESSION"){
        this.units2 = this.spaces;
        this.chosenUnit = value;
      }else if(value == "DEPARTEMENT"){
        this.units2 = this.spaces[0].professions;
        this.chosenUnit = value;
        console.log(this.chosenUnit); 
        
      }else if(value == "MiniDep"){
        this.units2 = this.spaces[0].professions[0].departements;
        this.chosenUnit = value;
      }
    });

    this.getAllUnits2();

    this.form.get('inputValue2')?.valueChanges.subscribe(value => {
      console.log('Input value changed:', value);
      if(this.chosenUnit == "PROFESSION"){
         this.empService.getUnitEmployees(value,"SPACE").subscribe({
          next : (res : Employee[]) => {
            this.employees = res;
            console.log(this.employees);
            
          },
          error:error => (console.log(error))
         })
      }else if(this.chosenUnit == "DEPARTEMENT"){
        this.empService.getUnitEmployees(value,"PROFESSION").subscribe({
          next : (res : Employee[]) => {
            this.employees = res;
            console.log(this.employees);
          },
          error:error => (console.log(error))
         })

      }else if(this.chosenUnit == "MiniDep"){
        this.empService.getUnitEmployees(value,"DEPARTEMENT").subscribe({
          next : (res : Employee[]) => {
            this.employees = res;
            console.log(this.employees);
          },
          error:error => (console.log(error))
         })

      }
      
    });

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
             unit.unit_type = "MiniDep"
             this.units?.push(unit);
          })
        },
         error:error => (console.log(error))   
      })
      
    }
  }

  GoToSpeceficUnit( unitType:string,id:number){
    console.log(this.router.url.split('/')[2]);
    if(this.router.url.split('/')[2]==='management'){
        this.router.navigate(['/dashboard/management/units/'+unitType + '/'+id.toString()])
    }else{
      this.router.navigate(['/dashboard/units/'+unitType + '/'+id.toString()])
    }
  }

  //Form Appearance
  switchAppearance(){
    this.formAddUnit = !this.formAddUnit;
  }

  //Create a unit
  createAUnit(){
     
  }
  
  //Get all units of a user
  getAllUnits2(){
    this.unitsService.getAllSpaces(1).subscribe({
      next : (res : any) => {
        this.spaces = res;
        console.log(res);
      },
       error:error => (console.log(error))
      
    })
  }
 

  createUnit(){

    console.log("z",this.chosenUnit);
    

    if(this.chosenUnit == "DEPARTEMENT"){
      console.log("hereOne");
      
      this.unitsService.addDepartement(this.form.value.unitName!,this.form.value.description!,this.form.value.inputValue3!,this.form.value.inputValue2!).subscribe({
        next : (res : any) => {
          console.log(res);
        },
         error:error => (console.log(error))
      })
    }else if(this.chosenUnit == "SPACE"){
      this.unitsService.addSpace(this.form.value.unitName!,this.form.value.description!,this.form.value.inputValue3!).subscribe({
        next : (res : any) => {
          console.log(res);
        },
         error:error => (console.log(error))
      })
    }else if(this.chosenUnit == "PROFESSION"){
      console.log("hereTwo");
      this.unitsService.addProfession(this.form.value.unitName!,this.form.value.description!,this.form.value.inputValue3!,this.form.value.inputValue2!).subscribe({
        next : (res : any) => {
          console.log(res);
        },
         error:error => (console.log(error))
      })
    }else if(this.chosenUnit == "MiniDep"){
      this.unitsService.addMiniDep(this.form.value.unitName!,this.form.value.description!,this.form.value.inputValue3!,this.form.value.inputValue2!).subscribe({
        next : (res : any) => {
          console.log(res);
        },
         error:error => (console.log(error))
      })
    }

    this.form.reset();
  }
}
