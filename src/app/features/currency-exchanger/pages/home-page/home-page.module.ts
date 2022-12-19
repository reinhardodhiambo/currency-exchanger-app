import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import {ExchangerModule} from "@shared/component/exchanger/exchanger.module";
import {
    PopularCurrenciesModule
} from "@features/currency-exchanger/components/popular-currencies/popular-currencies.module";



@NgModule({
  declarations: [
    HomePageComponent
  ],
    imports: [
        CommonModule,
        ExchangerModule,
        PopularCurrenciesModule,
    ]
})
export class HomePageModule { }
