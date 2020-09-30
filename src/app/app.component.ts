import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  array = [];

  valueTextField = new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]);

  constructor() {}

  ngOnInit(): void {}

  submit() {
    this.array.push(parseInt(this.valueTextField.value));
    console.log(this.array);
    this.valueTextField.reset();
  }

  getColor(num:number) {
    return num % 3 === 0 ? 'green':'white';
  }

  
  
}


