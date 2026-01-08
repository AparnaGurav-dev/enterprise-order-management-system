import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListComponent } from './products/list/list.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'products', component: ListComponent }
];
