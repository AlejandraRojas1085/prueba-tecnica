import { RouterModule, Routes } from '@angular/router';


import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';

const rutas: Routes = [
  {
    path: '', component: AuthenticationComponent,
    children: [
      { path: '', component: LoginComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule],
})
export class AuthenticationRouting {}
