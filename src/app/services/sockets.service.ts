import { Injectable } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
@Injectable()
export class SocketsService extends RxStomp{

  constructor() {
    super();
  }
  
}
