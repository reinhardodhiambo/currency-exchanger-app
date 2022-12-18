import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import {ExchangerModule} from "@shared/component/exchanger/exchanger.module";



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ExchangerModule,
  ]
})
export class HomePageModule { }
