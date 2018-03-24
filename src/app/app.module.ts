import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { RecordsService } from './records.service';


import { AppComponent } from './app.component';
import { RecordComponent } from './record/record.component';


@NgModule({
  declarations: [
    AppComponent,
    RecordComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
