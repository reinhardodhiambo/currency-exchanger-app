import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateComponent } from './rate.component';



@NgModule({
    declarations: [
        RateComponent
    ],
    exports: [
        RateComponent
    ],
    imports: [
        CommonModule
    ]
})
export class RateModule { }
