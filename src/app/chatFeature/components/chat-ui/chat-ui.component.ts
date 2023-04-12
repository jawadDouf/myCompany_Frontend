import { Component, Input } from '@angular/core';
import { Message } from '@stomp/stompjs';
import { TextMessage } from '../../models/TextMessage';
import { SocketsService } from '../../services/sockets.service';
import { Unit } from 'src/app/unitsCrudFeature/models/Unit';
import { ChatServiceService } from '../../services/chat-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.css']
})
export class ChatUiComponent {
  
  receivedMessages: TextMessage[] = [];

  textMessage!: TextMessage;

  messageBody : string = "";

  //  id:number =;
  //  unitType : string | undefined;

  groupMessages! : TextMessage[];
  
  // @ts-ignore, to suppress warning related to being undefined
  private topicSubscription: Subscription;

  constructor(private rxStompService: SocketsService,private chatService : ChatServiceService,public activatedroute:ActivatedRoute) {}

  ngOnInit() {
    this.topicSubscription = this.rxStompService
      .watch('/topic/public/'+ this.activatedroute.snapshot.paramMap.get("id")+this.activatedroute.snapshot.paramMap.get("unit"))
      .subscribe((tm2:Message) : void => {
        this.textMessage = JSON.parse(tm2.body);
        console.log(tm2.body);
        this.groupMessages.push(this.textMessage);
      });

      this.getGroupChatMessages();

  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }

  getGroupChatMessages(){
     this.chatService.getChatGroupMessages(parseInt(this.activatedroute.snapshot.paramMap.get("id")!) ,this.activatedroute.snapshot.paramMap.get("unit")!).subscribe({
      next : (res : TextMessage[]) => {
        this.groupMessages = res;  
        console.log(this.groupMessages);
      },
      error:error => (console.log(error))
     })
  }

  onSendMessage() {
    this.rxStompService.publish({ destination: '/app/sending/'+ this.activatedroute.snapshot.paramMap.get("id")+this.activatedroute.snapshot.paramMap.get("unit"),body:JSON.stringify({message:this.messageBody,senderId:1,chatGroupId:1})});
    this.messageBody = "";
  }
}
