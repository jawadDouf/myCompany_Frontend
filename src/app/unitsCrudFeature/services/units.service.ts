import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unit } from '../models/Unit';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  baseUrl : string = "http://localhost:8082/api/"

  constructor(private http: HttpClient) { }


  //get all spaces 
  getAllSpaces(id : number){
    return this.http.get<Unit[]>(this.baseUrl + "space/"+id);
  }

  //get all professions
  getAllProfessions(id : number){
    return this.http.get<Unit[]>(this.baseUrl + "profession/"+id);
  }

  //get all departements
  getAllDepartements(id : number){
    return this.http.get<Unit[]>(this.baseUrl + "departement/"+id);
  }

  //get all miniDeps
  getAllMineDeps(id : number){
    return this.http.get<Unit[]>(this.baseUrl + "miniDeps/"+id);
  }

}
