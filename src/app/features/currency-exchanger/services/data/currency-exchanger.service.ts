import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangerService {
  private amountBS$ = new BehaviorSubject<number>(1);
  amount$ = this.amountBS$.asObservable();
  private fromBS$ = new BehaviorSubject<string>('EUR');
  from$ = this.fromBS$.asObservable();
  private toBS$ = new BehaviorSubject<string>('USD');
  to$ = this.toBS$.asObservable();
  private conversionBS$ = new BehaviorSubject<any>({amount: 1, from: 'EUR', to: 'USD'});
  conversion$ = this.conversionBS$.asObservable();
  private descriptionBS$ = new BehaviorSubject<any>({});
  descriptions$ = this.descriptionBS$.asObservable();

  constructor() {
  }

  setAmount(amount: any) {
    this.amountBS$.next(amount);
  }

  setFrom(from: any) {
    this.fromBS$.next(from);
  }

  setTo(to: any) {
    this.toBS$.next(to);
  }

  setConversion(conversion: any) {
    this.conversionBS$.next(conversion)
  }

  setDescriptions(description: any) {
    this.descriptionBS$.next(description)
  }

}
