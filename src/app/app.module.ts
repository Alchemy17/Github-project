import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RecordsService } from './records.service';


import { AppComponent } from './app.component';
import { RecordComponent } from './record/record.component';


@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    HttpModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
