import { Component } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent {
  


  constructor(private empService: EmployeesService,private activatedroute:ActivatedRoute){

  }


  ngOnInit(){
    this.getEmployeesOfAUnit();
  }

  // Get employees of a unit
  getEmployeesOfAUnit(){
    
    this.empService.getUnitEmployees(parseInt(this.activatedroute.snapshot.paramMap.get("id")!),this.activatedroute.snapshot.paramMap.get("unit")!).subscribe({
      next : (res : any) => {
        console.log(res);
      },
      error:error => (console.log(error))
    })
  }
}
