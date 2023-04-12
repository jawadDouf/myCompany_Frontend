import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TextMessage } from '../models/TextMessage';

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
}
