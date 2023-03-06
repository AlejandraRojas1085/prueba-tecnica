import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

const materialModules = [
  MatInputModule,
  MatButtonModule,
  MatGridListModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule,
  MatSelectModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatTabsModule,
  MatStepperModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatTooltipModule,
  MatRadioModule,
  MatNativeDateModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatDialogModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatDialogModule,
  MatRadioModule,
  MatCheckboxModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSlideToggleModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatTooltipModule,
  MatTabsModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules],
  exports: materialModules
})
export class MaterialModule { }
