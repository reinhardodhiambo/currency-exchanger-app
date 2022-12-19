import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpParams
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "@environments/environment";
const API_HEADER_KEY: string = 'apikey';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const requested = request.clone({
      // params: (request.params ? request.params : new HttpParams())
      //   .set('access_key', `${environment.FIXER_API_KEY}`)
      headers: request.headers
        .set(API_HEADER_KEY, `${environment.FIXER_API_KEY}`)
        .set('Content-Type', 'application/json')
    });
    return next.handle(requested);
  }
}
