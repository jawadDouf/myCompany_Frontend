import { Component, Input } from '@angular/core';
import { Message } from '@stomp/stompjs';
import { TextMessage } from '../../models/TextMessage';
import { SocketsService } from '../../services/sockets.service';
import { Unit } from 'src/app/unitsCrudFeature/models/Unit';
import { ChatServiceService } from '../../services/chat-service.service';
import { ActivatedRoute } from '@angular/router';
import { ChatGroup } from '../../models/ChatGroup';

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

  //  id:number =;
  //  unitType : string | undefined;

  groupMessages! : TextMessage[];

  unitId!:string;
  unitType!:string;
  
  
  // @ts-ignore, to suppress warning related to being undefined
  private topicSubscription: Subscription;

  constructor(private rxStompService: SocketsService,private chatService : ChatServiceService,public activatedroute:ActivatedRoute) {}

  ngOnInit() {

    this.activatedroute.params.subscribe(params => {
      this.unitId = params['id'];
      this.unitType = params['unit'];
      this.getGroupChatMessages(params['unit'],params['id']);
      this.getChatGroup(params['unit'],params['id']);
      this.topicSubscription = this.rxStompService
      .watch('/topic/public/'+ this.unitId+this.unitType)
      .subscribe((tm2:Message) : void => {
        this.textMessage = JSON.parse(tm2.body);
        console.log(tm2.body);
        this.groupMessages.push(this.textMessage);
      });
    })
    
    
      
    

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
    this.rxStompService.publish({ destination: '/app/sending/'+ this.unitId+this.unitType,body:JSON.stringify({message:this.messageBody,senderId:1,chatGroupId:this.chatGroup.id})});
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
