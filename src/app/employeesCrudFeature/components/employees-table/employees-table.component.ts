import { Component } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Employee } from '../../models/Employee';
import { filter } from 'rxjs';
import { UnitsService } from 'src/app/unitsCrudFeature/services/units.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Unit } from 'src/app/unitsCrudFeature/models/Unit';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent {
  

  employees : Employee[] | undefined;

  formAddUnit : boolean = false;

  managementCond : boolean = false;

  form!: FormGroup;

  inputValue = "";
  inputValue2 = "";
  inputValue3 = "";
  inputValue4 = "";

  units1!:Unit[];
  units2!:Unit[];
  units3!:Unit[];
  units4!:Unit[];

  spaces! : any[];

  selectedIndexPro:any |undefined;
  

  constructor(private empService: EmployeesService,private activatedroute:ActivatedRoute,private router : Router,private unitsService : UnitsService,private formBuilder: FormBuilder){ 
  }


  ngOnInit(){
    this.getEmployeesOfAUnit();

    this.activatedroute.params.subscribe(params => {
      if(this.router.url.split('/')[2]=='management'){
         this.managementCond = true;
      }else{
        this.managementCond = false;
      }
 })

 this.getAllUnits2();

 this.form = this.formBuilder.group({
  inputValue: '',
  inputValue2: '',
  inputValue3: '',
  inputValue4: '',
});

this.form.get('inputValue2')?.valueChanges.subscribe(value => {
    this.units3 = this.spaces[0].professions[parseInt(value)].departements;
    this.selectedIndexPro = value;
    
});

this.form.get('inputValue3')?.valueChanges.subscribe(value => {
  this.units4 = this.spaces[0].professions[parseInt(this.selectedIndexPro)].departements[parseInt(value)].miniDeps;
  
});
  }

  // Get employees of a unit
  getEmployeesOfAUnit(){
    this.empService.getUnitEmployees(parseInt(this.activatedroute.snapshot.paramMap.get("id")!),this.activatedroute.snapshot.paramMap.get("unit")!).subscribe({
      next : (res : Employee[]) => {
        this.employees = res;
      },
      error:error => (console.log(error))
    })
  }

  //Add a unit 


  //Form Appearance
  switchAppearance(){
    this.formAddUnit = !this.formAddUnit;
  }

  //Get all units of a user
  getAllUnits2(){
    this.unitsService.getAllSpaces(1).subscribe({
      next : (res : any) => {
        this.spaces = res;
        this.units2 = this.spaces[0].professions
        console.log(res);
      },
       error:error => (console.log(error))
      
    })
  }
}
