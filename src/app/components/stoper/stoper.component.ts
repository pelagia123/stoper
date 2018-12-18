import {Component, EventEmitter, Output} from '@angular/core';
import {Observable, Subscription, timer} from 'rxjs';
import {MeasurementService} from '../../measurement.service';

@Component({
  selector: 'app-stoper',
  templateUrl: './stoper.component.html',
  styleUrls: ['./stoper.component.scss']
})
export class StoperComponent {
  timerRunning = false;
  startTime: Date;
  resumeTime: Date;
  timerSubscription: Subscription;
  initialTimePassed = 0;
  timePassed = 0;
  paused = false;
  constructor (private measurementService: MeasurementService) {}

  start() {
    this.timerRunning = true;
    this.paused = false;
    this.initialTimePassed = 0;
    this.countTime();
    this.startTime = new Date();
    this.resumeTime = this.startTime;
  }

  measurement() {
    this.measurementService.addMeasurement(this.timePassed);
  }

  reset() {
    this.timerSubscription.unsubscribe();
    this.measurementService.passResetInfo(true);

    this.initialTimePassed = 0;
    this.timePassed = 0;
    if (this.timerRunning) {
      this.startTime = new Date();
      this.resumeTime = this.startTime;
      this.countTime();
    }
  }

  pause() {
    this.timerRunning = false;
    this.paused = true;
    this.timerSubscription.unsubscribe();
    this.initialTimePassed = this.timePassed;
  }

  resume() {
    this.paused = false;
    this.timerRunning = true;
    this.resumeTime = new Date()
    this.countTime();
  }

  countTime() {
    const timerNumbers = timer(0, 10);
    this.timerSubscription = timerNumbers.subscribe(() => {
      if (this.timerRunning) {
        this.timePassed = (Date.now() - +this.resumeTime) + this.initialTimePassed;
      }
    });
  }
}
