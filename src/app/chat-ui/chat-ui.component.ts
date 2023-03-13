import { Component } from '@angular/core';
import { Message } from 'stompjs';
import { SocketsService } from '../services/sockets.service';

@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.css']
})
export class ChatUiComponent {
  
  receivedMessages: string[] = [];
  // @ts-ignore, to suppress warning related to being undefined
  private topicSubscription: Subscription;

  constructor(private rxStompService: SocketsService) {}

  ngOnInit() {
    this.topicSubscription = this.rxStompService
      .watch('/topic/public')
      .subscribe((message: Message) => {
        this.receivedMessages.push(message.body);
      });
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }

  onSendMessage() {
    const message = `Message generated at ${new Date()}`;
    this.rxStompService.publish({ destination: '/topic/public', body: message });
  }
}
