import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseUrl: string = ""

  constructor(private http: HttpClient) { }




  // Get employees of a unit
  getUnitEmployees(){
    return this.http.get<Employee[]>(this.baseUrl+"");
  }
  

   // Get one employee 
   getOneEmployee(){
    return this.http.get<Employee>(this.baseUrl+"");
   }
  // Add an employee
  addOneEmployee(employee : Employee){
    return this.http.post(this.baseUrl,employee);
  }
}
