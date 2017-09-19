import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { timerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  providers: [timerService],
})
export class TimerComponent implements OnInit {

  constructor (private timerService: timerService) {}

  ticks = 0;

  minutesDisplay: number = 0;
  secondsDisplay: number = 0;

  sub: Subscription;

  ngOnInit() {
      this.startTimer();
      // this.timerService.startTimer()
  }

  private startTimer() {

      let timer = Observable.timer(1, 1000);
      this.sub = timer.subscribe(
          t => {
              this.ticks = t;

              this.secondsDisplay = 30 - this.getSeconds(this.ticks);

          }
      );
  }

  private getSeconds(ticks: number) {
      return this.pad(ticks % 60);
  }

  // private getMinutes(ticks: number) {
  //      return this.pad((Math.floor(ticks / 60)) % 60);
  // }

  private pad(digit: any) {
      return digit <= 9 ? '0' + digit : digit;
  }
}