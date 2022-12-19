import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FromToComponent} from "@shared/component/exchanger/from-to/from-to.component";

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.css']
})
export class ExchangerComponent implements OnInit {

  @ViewChild(FromToComponent) fromToComponent!: FromToComponent;

  constructor(private fb: FormBuilder) {
  }

  amountForm: FormGroup = this.fb.group({
    amount: [1, [Validators.required]],
  });

  ngOnInit(): void {
  }

  swap(){
    console.log(this.fromToComponent.fromToForm.value)
  }


}
