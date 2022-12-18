import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.css']
})
export class ExchangerComponent implements OnInit{


  constructor(private fb: FormBuilder) {
  }
  amountForm: FormGroup =  this.fb.group({
    amount: ['', [Validators.required]],
  });

  ngOnInit(): void {
  }




}
