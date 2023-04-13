import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


    loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    })
  
  @Output()
  sendEvent = new EventEmitter();

  constructor(private auth:AuthService,private router:Router,private token:TokenService){}

  onSwitch(){
    this.sendEvent.emit();
  }

  signin(){
    this.auth.login(this.loginForm.value.email!,this.loginForm.value.password!).subscribe({
      next:(data:any) => {
        console.log(this.loginForm.value.email);
        console.log(this.loginForm.value.password);
        this.handelResponse(data);
      },
      error: error => (console.log(error))

    })
  }

  handelResponse(res:any){
   
    this.auth.user = res.user;
    console.log(this.auth.user);
    
    this.token.handle(res);
    this.router.navigateByUrl('/dashboard/employees/SPACE/1');
      
  }
}
