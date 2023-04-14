import { Component, Input } from '@angular/core';
import { Message } from '@stomp/stompjs';
import { TextMessage } from '../../models/TextMessage';
import { SocketsService } from '../../services/sockets.service';
import { Unit } from 'src/app/unitsCrudFeature/models/Unit';
import { ChatServiceService } from '../../services/chat-service.service';
import { ActivatedRoute } from '@angular/router';
import { ChatGroup } from '../../models/ChatGroup';
import { AuthService } from 'src/app/authFeature/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.css']
})
export class ChatUiComponent {
  
  receivedMessages: TextMessage[] = [];

  textMessage!: TextMessage;

  messageBody : string = "";

  chatGroup! : ChatGroup;

  senderId : number | undefined;
  userfName : string | undefined;
  userlName : string | undefined;

  //  id:number =;
  //  unitType : string | undefined;

  groupMessages! : TextMessage[];

  unitId!:string;
  unitType!:string;
  
  
  // @ts-ignore, to suppress warning related to being undefined
  private topicSubscription: Subscription;

  constructor(private rxStompService: SocketsService,private chatService : ChatServiceService,public activatedroute:ActivatedRoute,private auth:AuthService,private token:TokenService) {}

  ngOnInit() {

    //Watch for the parameters of the page to get the appropriate page
    this.activatedroute.params.subscribe(params => {

      this.unitId = params['id'];
      this.unitType = params['unit'];
      //  get the messages of the groupe
      this.getGroupChatMessages(params['unit'],params['id']);
      //get the chat group
      this.getChatGroup(params['unit'],params['id']);
      //watch for the socket messages
      this.topicSubscription = this.rxStompService
      .watch('/topic/public/'+ this.unitId+this.unitType)
      .subscribe((tm2:Message) : void => {
        this.textMessage = JSON.parse(tm2.body);
        console.log("tm",this.textMessage); 
        this.groupMessages.push(this.textMessage);
      });
    })
    
    
    if(this.token.employeId != null){
      this.senderId = this.token.employeId;
    }else{
      this.senderId = parseInt(this.token.getAuthenticatedUser()!) ;
    }

    if(this.token.firstName != null){
      this.userfName = this.token.firstName;
      this.userlName = this.token.lastName;
    }else{
      this.userfName = this.token.getFirstName()!;
      this.userlName = this.token.getLastName()!;
    }
      
    

  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }

  getGroupChatMessages(unitType:string,id:string){
     this.chatService.getChatGroupMessages(parseInt(id),unitType).subscribe({
      next : (res : TextMessage[]) => {
        this.groupMessages = res;  
        console.log(this.groupMessages);
      },
      error:error => (console.log(error))
     })
  }

  onSendMessage() {    
    console.log("kr",this.userfName);
    
    this.rxStompService.publish({ destination: '/app/sending/'+ this.unitId+this.unitType,body:JSON.stringify({message:this.messageBody,senderId:this.senderId,chatGroupId:this.chatGroup.id,fsender:this.userfName,lsender:this.userlName})});
    this.messageBody = "";
  }

  getChatGroup(unitType:string,id:string){
    this.chatService.getChatGroup(parseInt(id),unitType).subscribe({
      next : (res : ChatGroup) => {
        this.chatGroup = res;  
        console.log(this.chatGroup);
      },
      error:error => (console.log(error))
     })
  }
}
