import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { WarningalertComponent } from './warningalert/warningalert.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessalertComponent,
    WarningalertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
