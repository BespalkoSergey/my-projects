import { Subject } from 'rxjs';
import { StopwatchService } from './../services/stopwatch.service';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styles: [],
  providers: [StopwatchService],
})
export class StopwatchComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('waitBtn', { static: true }) waitBtn: ElementRef;
  @ViewChild('startBtn', { static: true }) startBtn: ElementRef;

  waitBtnNE: HTMLElement;
  startBtnNE: HTMLElement;

  start: string = this.stopwatchService.start;
  wait: string = this.stopwatchService.wait;
  stop: string = this.stopwatchService.stop;
  reset: string = this.stopwatchService.reset;

  defValue: string = '00:00:00';
  outer: string = this.defValue;
  state: string;
  btnValue: string;
  subscribes: any = {};

  stateSubject: Subject<string> = new Subject();
  resetBtnSubject: Subject<boolean> = new Subject();

  isDisabledStartBtn: boolean = false;

  constructor(private stopwatchService: StopwatchService) { }

  ngOnInit(): void {
    this.subscribes.GetStopWatch = this.stopwatchService.getStopWatch()
      .subscribe(data => this.outer = data);

    this.subscribes.WaitBtn = this.stopwatchService.waitBtnSubject.
      subscribe(res => this.state = res)

    this.subscribes.State = this.stopwatchService.stateSubject
      .subscribe(state => {
        const isStateBtn = this.btnValue !== this.wait && this.btnValue !== this.reset;
        if (isStateBtn) this.state = state;
      });
  }

  ngAfterViewInit(): void {
    this.waitBtnNE = this.waitBtn.nativeElement;
    this.startBtnNE = this.startBtn.nativeElement;
    this.getNodeMutation(this.startBtnNE);
    this.stopwatchService.getButtonClick(this.waitBtnNE);
  }

  ngOnDestroy(): void {
    this.stopwatchService.destroy();
    this.subscribes.subGetStopWatch.unsubscribe();
    this.subscribes.subWaitBtn.unsubscribe();
    this.subscribes.subState.unsubscribe();
  }

  onClick(btnValue) {
    this.btnValue = btnValue;
    this.stopwatchService.stateSubject.next(btnValue);
  }

  getNodeMutation(node: HTMLElement) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        this.isDisabledStartBtn = node.hasAttribute("disabled");
      });
    });

    observer.observe(node, { attributes: true });
  }
}