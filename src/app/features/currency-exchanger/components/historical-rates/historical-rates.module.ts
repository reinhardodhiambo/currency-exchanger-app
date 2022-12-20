import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricalRatesComponent } from './historical-rates.component';



@NgModule({
    declarations: [
        HistoricalRatesComponent
    ],
    exports: [
        HistoricalRatesComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HistoricalRatesModule { }
