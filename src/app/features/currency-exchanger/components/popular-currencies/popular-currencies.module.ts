import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularCurrenciesComponent } from './popular-currencies.component';



@NgModule({
  declarations: [
    PopularCurrenciesComponent
  ],
  exports: [
    PopularCurrenciesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PopularCurrenciesModule { }
