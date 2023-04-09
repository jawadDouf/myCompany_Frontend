import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseUrl: string = "http://localhost:8083/api/employees"

  constructor(private http: HttpClient) { }




  // Get employees of a unit
  getUnitEmployees(id : number,unit : string){
    const params = new HttpParams()
    .set('id', id)
    .set('unitType', unit);
    return this.http.get<Employee[]>(this.baseUrl , {params});
  }
  
  // Get one employee 
  getOneEmployee() : Observable<Employee>{
     return this.http.get<Employee>(this.baseUrl+"");
  }

  // Add an employee
  addOneEmployee(employee : Employee) : Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl,employee);
  }
}
