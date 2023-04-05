import { Component } from '@angular/core';
import { Message } from '@stomp/stompjs';
import { TextMessage } from '../../models/TextMessage';
import { SocketsService } from '../../services/sockets.service';

@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.css']
})
export class ChatUiComponent {
  
  receivedMessages: TextMessage[] = [];

  textMessage!: TextMessage;

  messageBody : string = "";
  
  // @ts-ignore, to suppress warning related to being undefined
  private topicSubscription: Subscription;

  constructor(private rxStompService: SocketsService) {}

  ngOnInit() {
    this.topicSubscription = this.rxStompService
      .watch('/topic/public/'+6+"myCompany2"+"Space")
      .subscribe((tm2:Message) : void => {
        this.textMessage = JSON.parse(tm2.body);
        console.log(tm2.body);
        
        this.receivedMessages.push(this.textMessage);
      });
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }

  onSendMessage() {
    this.rxStompService.publish({ destination: '/app/sending/'+6+"myCompany2"+"Space",body:JSON.stringify({message:this.messageBody,senderId:1,chatGroupId:1})});
    this.messageBody = "";
  }
}
