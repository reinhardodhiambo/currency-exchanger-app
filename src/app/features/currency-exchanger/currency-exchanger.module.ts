import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyExchangerRoutingModule } from './currency-exchanger-routing.module';
import {ExchangerModule} from "@shared/component/exchanger/exchanger.module";
import {HomePageModule} from "@features/currency-exchanger/pages/home-page/home-page.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   // HomePageModule,
    CurrencyExchangerRoutingModule,
    ExchangerModule
  ]
})
export class CurrencyExchangerModule { }
