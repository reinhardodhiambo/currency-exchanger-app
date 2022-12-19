import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnChanges{
  @Input() results = {
    from: "EUR",
    to:  "USD",
    amount: "12.1"
  }

  @Input() detailed: boolean = true;

  result: string = `${this.results.amount} ${this.results.to}`;

  ngOnChanges(changes: SimpleChanges): void {
    this.result = `${this.results.amount} ${this.results.to}`
  }


}
