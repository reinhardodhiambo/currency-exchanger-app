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

  fromToForm!: FormGroup;

  getSymbols() {
    this.eas.getSymbols().subscribe({
      next: (res: any) => {
        if (res.success === true) {
          this.symbols = Object.entries(res.symbols).map((symbol: any) => {
            return {
              code: symbol[0],
              description: symbol[1]
            }
          })
        }
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
    //this.getSymbols();
    this.fromToForm = this.fb.group({
      from: ['EUR', [Validators.required]],
      to: ['USD', [Validators.required]],
    });

  }

}
