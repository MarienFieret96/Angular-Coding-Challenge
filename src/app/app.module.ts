import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { VoorbeeldFotoComponent } from './voorbeeld-foto/voorbeeld-foto.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormInputComponent } from './form-input/form-input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VoorbeeldFotoComponent,
    FormSelectComponent,
    FormInputComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
