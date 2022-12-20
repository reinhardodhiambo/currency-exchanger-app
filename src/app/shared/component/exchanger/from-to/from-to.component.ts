import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExchangerApiService} from "@features/currency-exchanger/services/api/exchanger-api.service";
import {CurrencyExchangerService} from "@features/currency-exchanger/services/data/currency-exchanger.service";

@Component({
  selector: 'app-from-to',
  templateUrl: './from-to.component.html',
  styleUrls: ['./from-to.component.css']
})
export class FromToComponent implements OnInit, OnChanges {

  constructor(private fb: FormBuilder, private eas: ExchangerApiService, private ces: CurrencyExchangerService) {
  }

  @Input() from: string = '';
  @Input() to: string = '';
  symbols: any;
  fromToForm!: FormGroup;

  getSymbols() {
    const sub = this.eas.getSymbols().subscribe({
      next: (res: any) => {
        if (res.success === true) {
          const descriptions: any = {};
          this.symbols = Object.entries(res.symbols).map((symbol: any) => {
            descriptions[symbol[0]] = symbol[1];
            this.ces.setDescriptions(descriptions);
            return {
              code: symbol[0],
              description: symbol[1]
            }
          });
          if (this.from && this.to) {
            this.fromToForm?.controls['from']?.setValue(this.from);
            this.fromToForm?.controls['to']?.setValue(this.to);
          }
        }
      },
      complete: () => {
        sub.unsubscribe();
      },
    });
  }

  swap() {
    const temp_from = this.fromToForm.value.from
    const temp_to = this.fromToForm.value.to
    this.fromToForm.controls['from'].setValue(temp_to);
    this.fromToForm.controls['to'].setValue(temp_from);
    console.log(temp_from)
    console.log(temp_to)
  }

  ngOnInit(): void {
    this.fromToForm = this.fb.group({
      from: ['EUR', [Validators.required]],
      to: ['USD', [Validators.required]],
    });
    this.getSymbols();

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['from']?.currentValue !== changes['from']?.previousValue) {
      this.fromToForm?.controls['from'].setValue(this.from);
    }
    if (changes['to']?.currentValue !== changes['to']?.previousValue) {
      this.fromToForm?.controls['to'].setValue(this.to);
    }
  }

}
