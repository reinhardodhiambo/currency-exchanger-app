import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExchangerComponent} from './exchanger.component';
import {FromToComponent} from './from-to/from-to.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RateModule} from "@shared/component/exchanger/rate/rate.module";
import {ResultModule} from "@shared/component/exchanger/result/result.module";


@NgModule({
  declarations: [
    ExchangerComponent,
    FromToComponent
  ],
  exports: [
    ExchangerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RateModule,
    ResultModule
  ]
})
export class ExchangerModule {
}
