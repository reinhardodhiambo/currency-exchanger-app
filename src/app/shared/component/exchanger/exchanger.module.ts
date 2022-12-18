import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangerComponent } from './exchanger.component';
import { FromToComponent } from './from-to/from-to.component';



@NgModule({
  declarations: [
    ExchangerComponent,
    FromToComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExchangerModule { }
