import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
    loginForm = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.maxLength(20)
      ]),
      currentPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    })

    get login() {
      return this.loginForm.get('login');
    }

    get currentPassword() {
      return this.loginForm.get('currentPassword');
    }

  onSubmit() {
    console.log(this.loginForm.value);
    console.log(this.login?.errors?.['required']);
  }
}
