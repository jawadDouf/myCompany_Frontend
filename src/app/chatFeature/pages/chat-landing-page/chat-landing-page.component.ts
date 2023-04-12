import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-landing-page',
  templateUrl: './chat-landing-page.component.html',
  styleUrls: ['./chat-landing-page.component.css']
})
export class ChatLandingPageComponent {


  constructor(public activatedroute:ActivatedRoute){

  }

  ngOnInit(){
    console.log(parseInt(this.activatedroute.snapshot.paramMap.get("id")!));
    console.log(this.activatedroute.snapshot.paramMap.get("unit"));
  }

  

}
