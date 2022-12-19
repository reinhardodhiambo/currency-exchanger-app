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
    result: "12.1"
  }

  @Input() detailed: boolean = true;

  result: string = `${this.results.result} ${this.results.to}`;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['results']?.currentValue !== changes['results']?.previousValue){
      console.log(this.results)
      this.result = `${this.results.result} ${this.results.to}`
    }

  }


}
