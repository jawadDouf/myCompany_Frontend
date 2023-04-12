import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TextMessage } from '../models/TextMessage';
import { ChatGroup } from '../models/ChatGroup';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  baseUrl: string = "http://localhost:8083/api/chatgroups"

  constructor(private http: HttpClient) { }

  // Get employees of a unit
  getChatGroupMessages(id : number,unit : string){
    const params = new HttpParams()
    .set('id', id)
    .set('unitType', unit);
    return this.http.get<TextMessage[]>(this.baseUrl+"/messages",{params});
  }

  // Get chat group 
  getChatGroup(id : number,unit : string){
    const params = new HttpParams()
    .set('id', id)
    .set('unitType', unit);
    return this.http.get<ChatGroup>(this.baseUrl+"/chatGroup",{params});
  }
}
