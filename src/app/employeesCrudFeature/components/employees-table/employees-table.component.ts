import { Component } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Employee } from '../../models/Employee';
import { filter } from 'rxjs';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent {
  

  employees : Employee[] | undefined;

  constructor(private empService: EmployeesService,private activatedroute:ActivatedRoute,private router : Router){ 
  }


  ngOnInit(){
    this.getEmployeesOfAUnit();
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
}
