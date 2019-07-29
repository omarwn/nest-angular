import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client, Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  findAll(client: Client, data: any) 
  // :Observable<WsResponse<any>>
  // :WsResponse<any>
  :void
  {
    this.server.emit("events" , client.id) // send to all 
    // return { event: 'events', data: client.id } // send to same client
    // return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: 5 }))); // send to same client
  }

  @SubscribeMessage('identity')
  async identity(client: Client, data: number): Promise<number> {
    return data;
  }
}