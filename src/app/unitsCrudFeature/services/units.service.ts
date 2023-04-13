import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unit } from '../models/Unit';
import { Observable } from 'rxjs';

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

  //add space to the database
  addSpace(name:string,description:string,unitHeadId:number) : Observable<any>{
     return this.http.post<any>(this.baseUrl + "space", {
      name: name,
      description: description,
      unitHeadId: unitHeadId
    });
      } 

  //add profession to the database
  addProfession(name:string,description:string,unitHeadId:number,spaceId : number) : Observable<any>{
    return this.http.post<any>(this.baseUrl + "profession", {
      name: name,
      description: description,
      unitHeadId: unitHeadId,
      spaceId: spaceId
    });
  }
  //add departement to the database
  addDepartement(name:string,description:string,unitHeadId:number,professionId : number) : Observable<any>{
    return this.http.post<any>(this.baseUrl + "departement", {
      name: name,
      description: description,
      unitHeadId: unitHeadId,
      profession_id: professionId
    });
  }

  //add miniDeps to the database
  addMiniDep(name:string,description:string,unitHeadId:number,departementId : number):Observable<any>{
    return this.http.post<any>(this.baseUrl + "miniDeps", {
      name: name,
      description: description,
      unitHeadId: unitHeadId,
      departementId: departementId
    });
  }

}
