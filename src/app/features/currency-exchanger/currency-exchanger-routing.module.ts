import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {DetailPageComponent} from "./pages/detail-page/detail-page.component";


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'detail/:from/:to/:amount', component: DetailPageComponent }
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyExchangerRoutingModule { }
