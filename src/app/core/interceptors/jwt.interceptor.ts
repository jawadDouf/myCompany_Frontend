import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private token:TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url == "http://localhost:8083/api/authentification/register" || request.url == "http://localhost:8083/api/authentification/login" || request.method == 'GET' ) return next.handle(request);
    
    request = request.clone({
      setHeaders: {
        // 'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${this.token.getToken()}`,
      }
    });
    return next.handle(request);
  }
}
