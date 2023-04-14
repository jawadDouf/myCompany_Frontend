import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})
export class DashboardNavComponent {


  @Input() appearancePatterns : number | undefined;
 
  constructor(private activatedroute:ActivatedRoute,private router : Router){

  }


  ngOnInit(){
    console.log(this.router.url);
    
  }


  redirectToEmplo(){
    console.log(this.router.url.split('/')[2]);
    if(this.router.url.split('/')[2]==='chat'){
        this.router.navigate(['/dashboard/employees/'+this.router.url.split('/')[3] + '/'+this.router.url.split('/')[4]])
    }else if(this.router.url.split('/')[2]==='management'){
      this.router.navigate(['/dashboard/management/employees/'+this.router.url.split('/')[4] + '/'+this.router.url.split('/')[5]])
  }
   else{
      this.router.navigate(['/dashboard/employees/'+this.router.url.split('/')[3] + '/'+this.router.url.split('/')[4]])
    }
  }

  redirectToMess(){
    if(this.router.url.split('/')[2]==='chat'){
      this.router.navigate(['/dashboard/chat/'+this.router.url.split('/')[3] + '/'+this.router.url.split('/')[4]])
  }else{
    this.router.navigate(['/dashboard/chat/'+this.router.url.split('/')[3] + '/'+this.router.url.split('/')[4]])
  }
  }

  redirectToUnits(){
    if(this.router.url.split('/')[2]==='management'){
      this.router.navigate(['/dashboard/management/units/'+this.router.url.split('/')[4] + '/'+this.router.url.split('/')[5]])
  }else if(this.router.url.split('/')[2]==='chat'){
    this.router.navigate(['/dashboard/units/'+this.router.url.split('/')[3] + '/'+this.router.url.split('/')[4]])
  } 
  else{
    this.router.navigate(['/dashboard/units/'+this.router.url.split('/')[3] + '/'+this.router.url.split('/')[4]])
  }
  }
  
}
