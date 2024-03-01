import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
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
    this.login?.markAsTouched();
    this.currentPassword?.markAsTouched();

    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.loginForm.reset();
    }
  }
}
