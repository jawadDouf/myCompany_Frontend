import { Component } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Employee } from '../../models/Employee';
import { filter } from 'rxjs';
import { UnitsService } from 'src/app/unitsCrudFeature/services/units.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Unit } from 'src/app/unitsCrudFeature/models/Unit';
import { AuthService } from 'src/app/authFeature/services/auth.service';
import { User } from 'src/app/authFeature/model/User';

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

  spaceName = "MyCompany2";
  professionName! :string;
  departementName! : string;
  miniDepName! : string;

  spaceId! : number;
  professionId! : number;
  departementId! : number;
  miniDepId! : number;

  units1!:Unit[];
  units2!:Unit[];
  units3!:Unit[];
  units4!:Unit[];

  spaces! : any[];

  employee: User | undefined ;

  selectedIndexPro:any |undefined;
  selectedIndexDep:any |undefined;
  
  registerForm = new FormGroup({
    fName: new FormControl(),
    lName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    inputValue: new FormControl(),
    inputValue2: new FormControl(),
    inputValue3: new FormControl(),
    inputValue4: new FormControl(),

  })

  constructor(private empService: EmployeesService,private activatedroute:ActivatedRoute,private router : Router,private unitsService : UnitsService,private formBuilder: FormBuilder,private auth:AuthService){ 
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
 

this.registerForm.get('inputValue2')?.valueChanges.subscribe(value => {
    this.units3 = this.spaces[0].professions[parseInt(value)].departements;
    this.selectedIndexPro = value;
    
    
});

this.registerForm.get('inputValue3')?.valueChanges.subscribe(value => {
  this.units4 = this.spaces[0].professions[parseInt(this.selectedIndexPro)].departements[parseInt(value)].miniDeps;
  this.professionId = this.spaces[0].professions[parseInt(this.selectedIndexPro)].id;
  this.professionName = this.spaces[0].professions[parseInt(this.selectedIndexPro)].name;
  this.departementId = this.spaces[0].professions[parseInt(this.selectedIndexPro)].departements
  [parseInt(value)].id;
  this.departementName = this.spaces[0].professions[parseInt(this.selectedIndexPro)].departements
  [parseInt(value)].name;
  console.log("x",this.departementId); 
  this.selectedIndexDep = parseInt(value);
});

this.registerForm.get('inputValue4')?.valueChanges.subscribe(value => {
  this.miniDepId = this.spaces[0].professions[parseInt(this.selectedIndexPro)].departements
  [this.selectedIndexDep].miniDeps[parseInt(value)].id;
  this.miniDepName = this.spaces[0].professions[parseInt(this.selectedIndexPro)].departements
  [this.selectedIndexDep].miniDeps[parseInt(value)].name;
  
  console.log(this.departementId);
});

  
  }

  // Get employees of a unit
  getEmployeesOfAUnit(){
    this.empService.getUnitEmployees(parseInt(this.activatedroute.snapshot.paramMap.get("id")!),this.activatedroute.snapshot.paramMap.get("unit")!).subscribe({
      next : (res : Employee[]) => {
        console.log(res);
        
        this.employees = res;
        console.log(this.employees);
        
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

  register(){
    console.log(this.departementName);
    console.log(this.spaceName);
    console.log(this.professionName);
    console.log(this.miniDepName);

    
    
    this.auth.register(this.registerForm.value.fName,this.registerForm.value.lName,this.registerForm.value.email,this.registerForm.value.password,this.spaceName,1,this.professionName,this.professionId,this.departementName,this.departementId,this.miniDepName,this.miniDepId).subscribe({
      next:(data:any) => {
        console.log(data);
      },
      error: error => (console.log(error))

    })
    this.registerForm.reset();
  }
}
