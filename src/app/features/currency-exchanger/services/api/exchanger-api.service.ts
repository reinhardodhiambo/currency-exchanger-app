import {Injectable} from '@angular/core';
import {HttpService} from "@core/http/http.service";

@Injectable({
  providedIn: 'root'
})
export class ExchangerApiService {

  constructor(private httpService: HttpService) {
  }

  getConversion(data: any) {
    //return this.httpService.makeRequest('convert', 'GET', data);
    return {
      "success": true,
      "query": {
        "from": "GBP",
        "to": "JPY",
        "amount": 25
      },
      "info": {
        "timestamp": 1519328414,
        "rate": 148.972231
      },
      "historical": "",
      "date": "2018-02-22",
      "result": 3724.305775
    }
  }

  getHistoricalRates(data: any) {
    //return this.httpService.makeRequest('', 'GET', data);

  }

  getLatest(data: any) {
    //return this.httpService.makeRequest('', 'GET', data);
    return {
      "success": true,
      "timestamp": 1519296206,
      "base": "EUR",
      "date": "2022-12-19",
      "rates": {
        "AUD": 1.566015,
        "CAD": 1.560132,
        "CHF": 1.154727,
        "CNY": 7.827874,
        "GBP": 0.882047,
        "JPY": 132.360679,
        "USD": 1.23396,
      }
    }
  }

  getSymbols(data: any) {
    //return this.httpService.makeRequest('', 'GET', data);
    return {
      "success": true,
      "symbols": {
        "AED": "United Arab Emirates Dirham",
        "AFN": "Afghan Afghani",
        "ALL": "Albanian Lek",
        "AMD": "Armenian Dram"
      }
    }
  }

  getTimeSeries(data: any) {
    return this.httpService.makeRequest('', 'GET', data);
  }


}
