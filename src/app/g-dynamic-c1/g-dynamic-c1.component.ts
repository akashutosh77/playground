import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-g-dynamic-c1',
  templateUrl: './g-dynamic-c1.component.html',
  styleUrls: ['./g-dynamic-c1.component.css'],
})
export class GDynamicC1Component implements OnInit {
  public emailForm!: FormGroup;
  public emailLabels = ['Home', 'Work', 'Other'];
  public validationMsgs = {
    emailAddress: [{ type: 'email', message: 'Enter a valid email' }],
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      emails: this.formBuilder.array([
        new FormGroup({
          emailAddress: new FormControl('', Validators.email),
          emailLabel: new FormControl(''),
        }),
      ]),
    });
  }

  public addEmailFormGroup() {
    const emails = this.emailForm.get('emails') as FormArray;
    emails.push(
      new FormGroup({
        emailAddress: new FormControl('', Validators.email),
        emailLabel: new FormControl(''),
      })
    );
  }

  public removeOrClearEmail(i: number) {
    const emails = this.emailForm.get('emails') as FormArray;
    if (emails.length > 1) {
      emails.removeAt(i);
    } else {
      emails.reset();
    }
  }

  private createEmailFormGroup(): FormGroup {
    return new FormGroup({
      emailAddress: new FormControl('', Validators.email),
      emailLabel: new FormControl(''),
    });
  }
  getControls() {
    return (this.emailForm.get('emails') as FormArray).controls;
  }
}
