import { Injectable } from '@angular/core';
import { Observable, Subject, timer, fromEvent } from "rxjs";
import { buffer, debounceTime, filter, map, takeUntil } from 'rxjs/operators';

import { StopwatchInterface } from './../interfaces/stopwatch.interface';

@Injectable()
export class StopwatchService {

  private stopedTimerSubject: Subject<boolean>;
  stateSubject: Subject<string> = new Subject();
  waitBtnSubject: Subject<any> = new Subject();

  private state = {
    start: 'start',
    stop: 'stop',
    wait: 'wait',
    reset: 'reset',
  }

  currentState: string;

  private counter: number;
  private interval;

  constructor() { }

  getStopWatch(): Observable<string> {
    return new Observable<string>(observer => {
      this.stateSubject.subscribe(state => this.count(observer, state));
      this.waitBtnSubject.subscribe(() => this.waitTimer());
    });
  }

  private count(observer, state: string): void {
    this.currentState = state;
    if (state === this.state.start) this.startTimer(observer);
    if (state === this.state.stop) this.stopTimer(observer);
    if (state === this.state.reset) this.clearTimer(observer);
  }

  private startTimer(observer): void {
    this.stopedTimerSubject = new Subject();
    const startTime = this.counter || 0;
    const source = timer(0, 1000).pipe(takeUntil(this.stopedTimerSubject));
    this.interval = source.pipe(map(x => x + startTime));
    this.interval.subscribe(val => this.setResult(observer, val));
  }

  private stopTimer(observer): void {
    this.stopGettingValFromSource();
    this.setResult(observer, 0);
  }

  private waitTimer(): void {
    this.stopGettingValFromSource();
  }

  private clearTimer(observer): void {
    this.stopTimer(observer);
    this.startTimer(observer);
  }

  private stopGettingValFromSource(): void {
    this.stopedTimerSubject.next(true);
    this.stopedTimerSubject.complete();
  }

  private setResult(obs, val): void {
    this.counter = val;
    const result = this.secondsToHMS(this.counter);
    obs.next(result);
  }

  private secondsToHMS(digit) {
    const number = parseInt(digit);
    const hours = Math.floor(number / 3600);
    const minutes = Math.floor(number % 3600 / 60);
    const seconds = Math.floor(number % 3600 % 60);
    const result = { hours, minutes, seconds };
    return this.formatResult(result);
  }

  private formatResult(obj: StopwatchInterface): string {
    const h = obj.hours < 10 ? '0' + obj.hours : '' + obj.hours;
    const m = obj.minutes < 10 ? '0' + obj.minutes : '' + obj.minutes;
    const s = obj.seconds < 10 ? '0' + obj.seconds : '' + obj.seconds;
    return `${h}:${m}:${s}`;
  }

  destroy() {
    this.stopGettingValFromSource();
  }

  get start() {
    return this.state.start;
  }
  get stop() {
    return this.state.stop;
  }
  get wait() {
    return this.state.wait;
  }
  get reset() {
    return this.state.reset;
  }

  getButtonClick(waitBtnNE) {
    const buttonSubscription = fromEvent(waitBtnNE, 'click');
    /* «Wait» - работает на двойной клик (время между нажатиями не более 300 мс!) */
    const buff = buttonSubscription.pipe(debounceTime(300));
    const click = buttonSubscription.pipe(
      buffer(buff),
      map(list => list.length),
      filter(x => x === 2)
    );
    click.subscribe(res => {
      this.waitBtnSubject.next(res)
    });
  }
}






