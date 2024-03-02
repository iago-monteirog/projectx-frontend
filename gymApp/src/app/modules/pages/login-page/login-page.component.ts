import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
    submitted: boolean = false;

    loginForm = new FormGroup({
      login: new FormControl('', [
        Validators.required,
      ]),
      currentPassword: new FormControl('', [
        Validators.required,
      ])
    })

    get login() {
      return this.loginForm.get('login');
    }

    get currentPassword() {
      return this.loginForm.get('currentPassword');
    }

  onSubmit() {
    this.submitted = true;
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.loginForm.reset();
    }
  }
}
