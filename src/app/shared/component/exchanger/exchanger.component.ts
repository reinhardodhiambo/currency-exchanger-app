import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FromToComponent} from "@shared/component/exchanger/from-to/from-to.component";
import {ExchangerApiService} from "@features/currency-exchanger/services/api/exchanger-api.service";

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.css']
})
export class ExchangerComponent implements OnInit {

  @ViewChild(FromToComponent) fromToComponent!: FromToComponent;

  constructor(private fb: FormBuilder, private eas: ExchangerApiService) {
  }

  conversion: any = {
    info: {
      timestamp: 1519328414,
      rate: 148.972231
    },
    historical: '',
    date: '2018-02-22',
    result: 3724.305775
  }

  result: any
  rate: any

  amountForm: FormGroup = this.fb.group({
    amount: [1, [Validators.required]],
  });

  ngOnInit(): void {
  }

  convert() {
    const params = {
      ...this.fromToComponent.fromToForm.value,
      ...this.amountForm.value
    }

    this.eas.getConversion(params).subscribe({
      next: (res: any) => {
        if (res.success === true) {
          this.conversion = res;
          this.result = {
            ...this.fromToComponent.fromToForm.value,
            ...{result: this.conversion.result}
          }
          this.rate = {
            ...this.fromToComponent.fromToForm.value,
            ...{rate: this.conversion?.info?.rate}
          }
        }
      },
    });

  }


}
