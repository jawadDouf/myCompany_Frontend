import { Injectable } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
@Injectable({
  providedIn: 'root'
})
export class SocketsService extends RxStomp{

  constructor() {
    super();
  }
  
}
