import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {ApiInterceptor} from "./api/api.interceptor";


export const httpInterceptorProviders: Array<Provider> = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
];
