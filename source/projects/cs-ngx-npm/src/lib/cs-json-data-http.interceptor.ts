import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';

import { convertJsonDates } from './helpers/date';

@Injectable()
export class JsonDateHttpInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse && this.isJson(event)) {
        event = event.clone({ body: convertJsonDates(event.body) });
      }
      return event;
    }));
  }

  private isJson(event: HttpResponse<any>): boolean {
    return event && event.headers.get('Content-Type') && event.headers.get('Content-Type').indexOf('application/json') > -1;
  }
}