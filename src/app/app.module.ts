import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoperComponent } from './components/stoper/stoper.component';
import { MeasurementComponent } from './components/measurment/measurement.component';
import {MatButtonModule, MatCardModule, MatDividerModule, MatListModule, MatTooltipModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TimePipe } from './time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StoperComponent,
    MeasurementComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
