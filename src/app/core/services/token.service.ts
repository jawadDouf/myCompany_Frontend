import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  set(data:any){
    localStorage.setItem('token',data.accessToken);
    localStorage.setItem('employeeId',data.employeeId);
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
