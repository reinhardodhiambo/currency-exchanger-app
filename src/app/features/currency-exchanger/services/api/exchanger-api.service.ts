import {Injectable} from '@angular/core';
import {HttpService} from "@core/http/http.service";

@Injectable({
  providedIn: 'root'
})
export class ExchangerApiService {

  constructor(private httpService: HttpService) {
  }

  getConversion(data: any) {
    return this.httpService.makeRequest('convert', 'GET', data);
  }

  getHistoricalRates(data: any) {
    //return this.httpService.makeRequest('', 'GET', data);

  }

  getLatest(data: any) {
    return this.httpService.makeRequest('latest', 'GET', data);
  }

  getSymbols() {
    return this.httpService.makeRequest('symbols', 'GET');
  }

  getTimeSeries(data: any) {
    return this.httpService.makeRequest('', 'GET', data);
  }


}
