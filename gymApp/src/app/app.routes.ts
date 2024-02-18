import { Routes } from '@angular/router';
import { LoginPageComponent } from './modules/pages/login-page/login-page.component';
import { RegisterPageComponent } from './modules/pages/register-page/register-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
