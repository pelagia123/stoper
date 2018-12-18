import {Component, OnInit} from '@angular/core';
import {MeasurementService} from '../../measurement.service';

@Component({
  selector: 'app-measurment',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.scss']
})
export class MeasurementComponent implements OnInit {
  measurements = [];
  constructor (private measurementService: MeasurementService) {}

  ngOnInit() {
    this.measurementService.lastMeasurement.subscribe(value => {
      this.measurements.push(value);
    });

    this.measurementService.clearMeasurments.subscribe(value => {
      if (value) {
        this.measurements = [];
      }
    });
  }

}
