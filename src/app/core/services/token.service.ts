import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  employeId : number | undefined;

  firstName : string | undefined;

  lastName :string | undefined;

  set(data:any){
    //Set user informations
    this.employeId = data.employeeId;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    //set the local storage
    localStorage.setItem('token',data.accessToken);
    localStorage.setItem('employeeId',data.employeeId);
    localStorage.setItem('firstName',data.firstName);
    localStorage.setItem('lastName',data.lastName);
  }

  handle(data:any){
    this.set(data);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getEmail(){
    return localStorage.getItem('email');
  }

  getFirstName(){
     return localStorage.getItem('firstName');
  }

  getLastName(){
    return localStorage.getItem('lastName');
 }

  getAuthenticatedUser(){
    return localStorage.getItem('employeeId');
  }

  remove(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  }

  decode(payload:any){
    return JSON.parse(atob(payload));
  }

  payload(token:any){
    return this.decode(token.split('.')[1]);
  }

  isValid(){
    const token = this.getToken();
    const email = this.getEmail();
    if(token){
      const payload = this.payload(token);
      if(payload){
        return email == payload.sub;
      }
    }
    return false;
  }

  getInfos(){
    const token = this.getToken();
    if(token){
      const payload = this.payload(token);
      return payload ? payload:null;
    }
    return null;
  }
  
  loggedIn(){
    return this.isValid();
  }

}
