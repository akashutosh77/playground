import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-g-dynamic-c',
  templateUrl: './g-dynamic-c.component.html',
  styleUrls: ['./g-dynamic-c.component.css'],
})
export class GDynamicCComponent implements OnInit {
  angForm = new FormGroup({
    names: new FormArray([
       new FormControl('', Validators.required),
    ])
  });

  get names(): FormArray {
    return this.angForm.get('names') as FormArray;
  }
  onFormSubmit(): void {
    for (let i = 0; i < this.names.length; i++) {
      console.log(this.names.at(i).value);
    }
  }
  addNameField() {
    this.names.push(new FormControl('', Validators.required));
  }

  deleteNameField(index: number) {
    if (this.names.length !== 1) {
      this.names.removeAt(index);
    }
    console.log(this.names.length);
  }

  ngOnInit(): void {

  }
}
