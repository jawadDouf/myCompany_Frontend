
import { SocketsService } from '../services/sockets.service';
import { myRxStompConfig } from './my-rx-stomp.config';

export function rxStompServiceFactory() {
  const rxStomp = new SocketsService();
  rxStomp.configure(myRxStompConfig);
  rxStomp.activate();
  return rxStomp;
}
