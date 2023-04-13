import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitsService } from 'src/app/unitsCrudFeature/services/units.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    
  unitsDropDown:boolean=false;
  unitsDropDown2:boolean=false;
  unitsDropDown3:boolean=false;
  unitsDropDown4:boolean=false;

  idSpaceUser : number = 1; 
  spaces! : any[];

  constructor(private unitsService : UnitsService,private activatedroute:ActivatedRoute,private router : Router){

  }


  ngOnInit(){
    this.getAllUnits();
  }


  showUnitsDropDown(){
    this.unitsDropDown=!this.unitsDropDown;
  }
  showUnitsDropDown2(){
    this.unitsDropDown2=!this.unitsDropDown2;
  }
  showUnitsDropDown3(){
    this.unitsDropDown3=!this.unitsDropDown3;
  }
  showUnitsDropDown4(){
    this.unitsDropDown4=!this.unitsDropDown4;
  }

  //Get all units of a user
  getAllUnits(){
    this.unitsService.getAllSpaces(this.idSpaceUser).subscribe({
      next : (res : any) => {
        this.spaces = res;
        console.log(res);
      },
       error:error => (console.log(error))
      
    })
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }
}
