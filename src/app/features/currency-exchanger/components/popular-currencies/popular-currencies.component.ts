import {Component, Injectable, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ExchangerApiService} from "@features/currency-exchanger/services/api/exchanger-api.service";

@Component({
  selector: 'app-popular-currencies',
  templateUrl: './popular-currencies.component.html',
  styleUrls: ['./popular-currencies.component.css']
})
export class PopularCurrenciesComponent implements OnInit, OnChanges {
  @Input() baseCurrency: string = 'EUR';
  @Input() amount: number = 1;

  constructor(private eas: ExchangerApiService) {
  }

  rates: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['baseCurrency']?.currentValue !== changes['baseCurrency']?.previousValue) {
      //this.getPopularCurrencies();
    }
  }

  ngOnInit(): void {
    //this.getPopularCurrencies();
  }

  getPopularCurrencies() {
    const params = {
      symbols: 'USD,CAD,EUR,CHF,CNY,GBP,JPY,AUD,EGP',
      base: this.baseCurrency
    }
    this.eas.getLatest(params).subscribe({
      next: (res: any) => {
        if (res.success === true) {
          this.rates = Object.entries(res.rates).map((rate: any) => {
            return {
              code: rate[0],
              amount: rate[1]
            }
          })
        }
      },
    });
  }
}
