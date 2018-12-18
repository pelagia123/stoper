import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {
  private measurementSource = new Subject<number>();
  lastMeasurement = this.measurementSource.asObservable();

  private resetSource = new Subject<boolean>();
  clearMeasurments = this.resetSource.asObservable();

  addMeasurement(measurement: number) {
    this.measurementSource.next(measurement);
  }

  passResetInfo(resetClicked: boolean) {
    this.resetSource.next(resetClicked);
  }
}
