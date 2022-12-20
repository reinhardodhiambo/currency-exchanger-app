import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FromToComponent} from "@shared/component/exchanger/from-to/from-to.component";
import {ExchangerApiService} from "@features/currency-exchanger/services/api/exchanger-api.service";
import {CurrencyExchangerService} from "@features/currency-exchanger/services/data/currency-exchanger.service";
import {ConvertResponse} from "@features/currency-exchanger/models/responses/convert-response";
import {ActivatedRoute} from "@angular/router";
import {ErrorResponse} from "@features/currency-exchanger/models/responses/error-response";

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.css']
})
export class ExchangerComponent implements OnInit, OnChanges {

  @ViewChild(FromToComponent) fromToComponent!: FromToComponent;

  constructor(
    private fb: FormBuilder,
    private eas: ExchangerApiService,
    private ces: CurrencyExchangerService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  conversion: any

  @Input() amount!: number;
  @Input() from: string = '';
  @Input() to: string = '';

  processing: boolean = false;
  detailed: boolean = false;
  result: any
  rate: any

  amountForm!: FormGroup;

  ngOnInit(): void {
    this.amountForm = this.fb.group({
      amount: [1, [Validators.required]],
    });
    const sub = this.activatedRoute.params.subscribe({
      next: (params) => {
        this.amount = params['amount'];
        this.from = params['from'];
        this.to = params['to'];
        if (this.amount) {
          this.amountForm?.controls["amount"].setValue(this.amount)
          this.detailed = true;
        }
      },
      complete: () => {
        sub.unsubscribe();
      },
    });
    this.convert();
  }

  convert() {
    const params = {
      ...this.fromToComponent?.fromToForm?.value,
      ...this.amountForm?.value
    }
    this.processing = true;
    const sub = this.eas.getConversion(params).subscribe({
      next: (res: any) => {
        this.processing = false;
        if (res.success === true) {
          this.conversion = res;
          this.result = {
            ...this.fromToComponent?.fromToForm?.value,
            ...{result: this.conversion?.result},
            ...this.amountForm?.value
          }
          this.rate = {
            ...this.fromToComponent.fromToForm.value,
            ...{rate: this.conversion?.info?.rate}
          }
          this.ces.setConversion(params)
        }
      }, error: (err: ErrorResponse) => {
        this.processing = false;
      },
      complete: () => {
        this.processing = false;
        sub.unsubscribe();
      },
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['amount']?.currentValue !== changes['amount']?.previousValue) {
      this.amountForm?.controls["amount"].setValue(this.amount)
    }
  }


}
