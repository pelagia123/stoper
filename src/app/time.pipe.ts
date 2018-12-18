import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    let milliseconds = String((value % 1000))
      , seconds = String(Math.floor((value / 1000)) % 60)
      , minutes = String(Math.floor((value / (1000 * 60))) % 60)
      , hours = String(Math.floor((value / (1000 * 60 * 60))));

    hours = (+hours < 10) ? '0' + hours : hours;
    minutes = (+minutes < 10) ? '0' + minutes : minutes;
    seconds = (+seconds < 10) ? '0' + seconds : seconds;

    if (+milliseconds < 10) {
     milliseconds = '00' + milliseconds;
    } else if (+milliseconds < 100) {
     milliseconds = '0' + milliseconds;
    }

    return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
  }

}
