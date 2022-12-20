import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CurrencyExchangerService} from "@features/currency-exchanger/services/data/currency-exchanger.service";
import {from} from "rxjs";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit{
  constructor(private ces: CurrencyExchangerService, private router: Router) {
  }

  from: string =''
  descriptions: any;
  title = '';

  ngOnInit(): void {
    this.ces.conversion$.subscribe((value) => {
      this.from = value.from;
      this.title = `${this.from} ${this.descriptions?"- "+this.descriptions[this.from]:""}`;
    });
    this.ces.descriptions$.subscribe((value) => {
      this.descriptions = value.from;
    });
  }

  home(){
    this.router.navigateByUrl('/');
  }
}
