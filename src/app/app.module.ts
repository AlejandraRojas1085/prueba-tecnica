import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// FZ modules installed
import { FlexLayoutModule } from '@angular/flex-layout';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MatFileUploadModule } from "mat-file-upload";
import { InlineSVGModule } from "ng-inline-svg";
import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "./common/material/material.module";
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HomeModule,
    HttpClientModule,
    MatFileUploadModule,
    NgxLoadingModule.forRoot({}),
    FlexLayoutModule,
    NgSelectModule,
    InlineSVGModule.forRoot(),
    AutocompleteLibModule,
    MaterialModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
