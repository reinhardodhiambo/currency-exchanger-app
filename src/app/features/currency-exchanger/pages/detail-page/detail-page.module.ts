import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detail-page.component';
import {ExchangerModule} from "@shared/component/exchanger/exchanger.module";
import {HistoricalRatesModule} from "@features/currency-exchanger/components/historical-rates/historical-rates.module";



@NgModule({
  declarations: [
    DetailPageComponent
  ],
  imports: [
    CommonModule,
    ExchangerModule,
    HistoricalRatesModule
  ]
})
export class DetailPageModule { }
