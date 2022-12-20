import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultComponent} from './result.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    ResultComponent
  ],
  exports: [
    ResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ResultModule {
}
