import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnChanges, OnInit{
  @Input() rate: string = 'XX.XX';
  @Input() from: string = 'EURO';
  @Input() to: string = 'USD';
  rateString: string = ''

  ngOnChanges(changes: SimpleChanges): void {
    this.rateString = `1.00 ${this.from} = ${this.rate} ${this.rate}`;
  }

  ngOnInit(): void {
    this.rateString = `1.00 ${this.from} = ${this.rate} ${this.to}`;
  }


}
