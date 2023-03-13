import { Component } from '@angular/core';
import { Message } from '@stomp/stompjs';
import { TextMessage } from '../Models/TextMessage';
import { SocketsService } from '../services/sockets.service';

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
      .watch('/topic/public')
      .subscribe((tm2:Message) : void => {
        this.textMessage = JSON.parse(tm2.body);
        this.receivedMessages.push(this.textMessage);
      });
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }

  onSendMessage() {
    this.rxStompService.publish({ destination: '/topic/public',body:JSON.stringify({id:1,message:this.messageBody})});
    this.messageBody = "";
  }
}
