import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';


import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NgxLoadingModule } from 'ngx-loading';
import { AuthenticationRouting } from './authentication.routing';


@NgModule({
  imports: [
    RouterModule,
    ReactiveFormsModule,
    AuthenticationRouting,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    CommonModule,
    NgxLoadingModule
  ],
  declarations: [LoginComponent, AuthenticationComponent],
  providers: [ ],
exports: [ LoginComponent ]
})
export class AuthenticationModule { }
