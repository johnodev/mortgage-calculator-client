import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  setupForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    //this.startOptions = this.getStartDateOptions(this.startDate);

    this.setupForm = this.fb.group({
      'principal': [null, Validators.compose([Validators.required, Validators.min(1)])],
      'interest': [null, Validators.compose([Validators.required, Validators.min(.01)])],
      'amortization': [null, Validators.compose([Validators.required, Validators.min(1)])]
    });
  }

  calculatePayment() {
    console.log('calculatePayment...');

  }

}
