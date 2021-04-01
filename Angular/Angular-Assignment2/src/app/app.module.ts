import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdFormComponent } from './AdvertisingForm/ad-form.component';
import { AdTableComponent } from './AdvertisingTable/ad-table.component';
import {FormsModule} from "@angular/forms";
import { EditFormComponent } from './EditProduct/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdFormComponent,
    AdTableComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
