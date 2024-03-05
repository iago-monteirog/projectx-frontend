import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

  submitted: boolean = false;

  errorsMessage = {
    required: 'Este campo é obrigatório.',
    emailError: 'Preencha com um e-mail válido.',
    maxLengthPassword: 'A senha não pode ter mais de 8 caracteres.',
    minLengthPassword: 'A senha não pode ter menos de 6 caracteres.'
  }

  registerForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    username: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(8)
    ])
  })

  get fullName() {
    return this.registerForm.get('fullName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password')
  }

  onSubmit() {
    this.submitted = true;

    this.registerForm.markAllAsTouched();

    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.registerForm.reset();
    }
  }
}
