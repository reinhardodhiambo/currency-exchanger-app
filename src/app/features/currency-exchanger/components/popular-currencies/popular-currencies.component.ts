import {Component, Injectable, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ExchangerApiService} from "@features/currency-exchanger/services/api/exchanger-api.service";
import {CurrencyExchangerService} from "@features/currency-exchanger/services/data/currency-exchanger.service";

@Component({
  selector: 'app-popular-currencies',
  templateUrl: './popular-currencies.component.html',
  styleUrls: ['./popular-currencies.component.css']
})
export class PopularCurrenciesComponent implements OnInit, OnChanges, OnDestroy {
  baseCurrency: string = 'EUR';
  amount: number = 1;

  constructor(private eas: ExchangerApiService,
              private ces: CurrencyExchangerService) {
  }

  rates: any[] = [];

  currencySubscription: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['amount']?.currentValue !== changes['amount']?.previousValue) {
      this.getPopularCurrencies();
    } else if (changes['baseCurrency']?.currentValue !== changes['baseCurrency']?.previousValue) {
      this.getPopularCurrencies();
    }
  }

  ngOnInit(): void {
    this.ces.conversion$.subscribe((value) => {
      this.amount = value.amount;
      this.baseCurrency = value.from;
      console.log('changed', value)
      this.getPopularCurrencies();
    });
    this.getPopularCurrencies();
  }

  getPopularCurrencies() {
    const params = {
      symbols: 'USD,CAD,EUR,CHF,CNY,GBP,JPY,AUD,EGP',
      base: this.baseCurrency
    }
    const sub = this.currencySubscription = this.eas.getLatest(params).subscribe({
      next: (res: any) => {
        if (res.success === true) {
          this.rates = Object.entries(res.rates).map((rate: any) => {
            const code = rate[0]
            const amount = this.amount * rate[1]
            return {
              code: code,
              amount: amount
            }
          })
        }
      },
      complete: () => {
        sub.unsubscribe();
      }
    });
  }

  ngOnDestroy(): void {
    this.currencySubscription.unsubscribe();
  }

}
