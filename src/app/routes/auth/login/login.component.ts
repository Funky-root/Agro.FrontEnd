import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  standalone: true,
imports: [
    FormsModule,
    ReactiveFormsModule]
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(40)]],
      lastName: ['', [Validators.required, Validators.maxLength(40)]],
      phone: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.maxLength(8)]],
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('Форма відправлена!', this.signupForm.value);
    } else {
      console.log('Форма невалідна');
    }
  }
}

