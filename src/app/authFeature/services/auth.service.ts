import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  basePath  = "http://localhost:8083/";

  user !:User;

  constructor(private http:HttpClient) { }
   
  login(email:string,password:string): Observable<unknown>{
    console.log(email);
    console.log(password);
    
    
    return this.http.post(`${this.basePath}api/authentification/login`,{
      email,
      password
    });
  }

  register(firstName:string,lastName:string,email:string,password:string,spaceName:string,idS:number,professionName:string,idP:number,departementName:string,idD:number,miniDepName:string,idMD:number){
    return this.http.post(`${this.basePath}api/authentification/register`,{
      first_name:firstName,
      last_name:lastName,
      email:email,
      password:password,
      spaceName:spaceName,
      idS:1,
      departementName:departementName,
      idD:idD,
      professionName:professionName,
      idP:idP,
      miniDepName:miniDepName,
      idMD:idMD
    });
  }

}
