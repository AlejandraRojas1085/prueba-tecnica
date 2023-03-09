import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormControlDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxLoadingModule } from 'ngx-loading';
import { HomeModule } from '../home.module';
import { DashboardBoxComponent } from './dashboard-box/dashboard-box.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
@NgModule({
  declarations: [
    DashboardComponent,
    DashboardBoxComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatSidenavModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatExpansionModule,
        MatSelectModule,
        MatButtonModule,
        FormsModule,
        MatInputModule,
        MatTabsModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        HomeModule,
        MatDatepickerModule,
        MatTooltipModule,
        MatRadioModule,
        MatNativeDateModule,
        MatTableModule,
        MatSortModule,
        NgxLoadingModule,
        MatChipsModule,
        HttpClientModule,
        MatPaginatorModule
    ]
})
export class DashboardModule { }
