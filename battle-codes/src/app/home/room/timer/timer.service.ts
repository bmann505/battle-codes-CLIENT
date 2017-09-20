import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

export class timerService {

  ticks = 0;

  minutesDisplay: number = 0;
  secondsDisplay: number = 0;

  sub: Subscription;

   startTimer() {
      console.log("works")
      let timer = Observable.timer(1, 1000);
      this.sub = timer.subscribe(
          t => {
              this.ticks = t;

              this.secondsDisplay = 30 - this.getSeconds(this.ticks);
              this.minutesDisplay = this.getMinutes(this.ticks);

          }
      );
  }
   getSeconds(ticks: number) {
      return this.pad(ticks % 60);
  }

  getMinutes(ticks: number) {
       return this.pad((Math.floor(ticks / 60)) % 60);
  }

  pad(digit: any) {
      return digit <= 9 ? '0' + digit : digit;
  }
}
