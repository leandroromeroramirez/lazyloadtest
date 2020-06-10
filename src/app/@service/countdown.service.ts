import { Injectable } from '@angular/core';
import { IInterval } from '../@models/services/iinterval';
import { Observable, interval } from 'rxjs';
import { startWith, takeWhile, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  constructor() { }

  getIntervalTime(dateA: number, dateB: number): IInterval {
    const intervalTime: number = Math.floor((dateA - dateB) / 1000);
    return this.getTime(intervalTime);
  }

  private getTime(time: number): IInterval {
    const _interval: IInterval = {days : 0, hours : 0, minutes : 0, seconds: 0};
    _interval.days = Math.floor(time / 86400);
    time -= _interval.days * 86400;
    _interval.hours = Math.floor(time / 3600) % 24;
    time -= _interval.hours * 3600;
    _interval.minutes = Math.floor(time / 60) % 60;
    time -= _interval.minutes * 60;
    _interval.seconds = time % 60;
    return _interval;
  }

  getCountDown(timeToGo: number): Observable<any> {
    const _interval = interval(1000);
    return _interval.pipe(
      map( () => {
        startWith(0);
        takeWhile(x => this.validIntervalCountdown(timeToGo));
        return  this.getIntervalTime(timeToGo, Date.now());
      }), catchError((err) => err)
    );
  }

  validIntervalCountdown(timeToGo) {
    return (timeToGo - Date.now()) >= 0 ? true : false;
  }
}
