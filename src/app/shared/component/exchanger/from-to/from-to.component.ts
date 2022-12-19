import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExchangerApiService} from "@features/currency-exchanger/services/api/exchanger-api.service";

@Component({
  selector: 'app-from-to',
  templateUrl: './from-to.component.html',
  styleUrls: ['./from-to.component.css']
})
export class FromToComponent implements OnInit {

  constructor(private fb: FormBuilder, private eas: ExchangerApiService) {
  }


  symbols: any;

  fromToForm: FormGroup = this.fb.group({
    from: ['', [Validators.required]],
    to: ['', [Validators.required]],
  });

  getSymbols() {
    const res = this.eas.getSymbols({})
    this.symbols = Object.entries(res.symbols).map((symbol: any) => {
      return {
        code: symbol[0],
        description: symbol[1]
      }
    })
    console.log("symbols", this.symbols)
  }

  ngOnInit(): void {
    this.getSymbols();
  }

}
