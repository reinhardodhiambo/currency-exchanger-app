import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnChanges {
  @Input() results = {
    from: "EUR",
    to: "USD",
    result: "XX",
    amount: 1
  }

  constructor(private router: Router) {
  }

  @Input() detailed: boolean = false;

  result: string = `${this.results.result} ${this.results.to}`;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['results']?.currentValue !== changes['results']?.previousValue) {
      console.log(this.results)
      this.result = `${this.results.result} ${this.results.to}`
    }

  }

  details() {
    this.router.navigateByUrl(`detail/${this.results.from}/${this.results.to}/${this.results.amount}`)
  }


}
