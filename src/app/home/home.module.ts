import { CdkStepper } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../common/material/material.module";
import { HomeRoutingModule } from './home-routing.module';
import { HomeSideBarComponent } from './home-side-bar/home-side-bar.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeSideBarComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [
    CdkStepper
  ]
})
export class HomeModule {
}
