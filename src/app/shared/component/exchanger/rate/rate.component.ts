import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnChanges, OnInit {
  @Input() rate: any;

  rateString: string = ''

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['rate']?.currentValue!==changes['rate']?.previousValue){
      this.rateString = `1.00 ${this.rate?.from} = ${this.rate?.to} ${this.rate?.rate}`;
    }

  }

  ngOnInit(): void {
    this.rateString = `1.00 ${this.rate?.from||'EURO'} = ${this.rate?.to || 'XX'} ${this.rate?.rate || 'USD'}`;
  }


}
