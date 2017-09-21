import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { roomService } from 'app/room.service';
import { timerTrackService } from 'app/timerTrack.service';
import * as io from 'socket.io-client'
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  providers: [],
})
export class TimerComponent implements OnInit {
  socket=io('http://localhost:3000')
  constructor (private roomService: roomService, private timerTrackService: timerTrackService) {

  }
  ticks = 0;
  minutesDisplay: number = 0;
  secondsDisplay: number = 0;

  sub: Subscription;

  ngOnInit() {

  this.roomService.submitTimer(this.socket, false)
    this.socket.on('timer', (data)=> {
          console.log(data)
      if (data.timerFlag) {
           this.timerTrackService.flag.status=true
          this.startTimer()

      }
    })

  }
   startTimer() {
      let timer = Observable.timer(1, 1000);
      this.sub = timer.subscribe(
          t => {
              this.ticks = t;

              this.secondsDisplay = 30 - this.getSeconds(this.ticks);
              if (this.secondsDisplay ==0) {
                           this.roomService.submitTimer(this.socket, false)
                       this.sub.unsubscribe()
              }

          }
      );

  }
   getSeconds(ticks: number) {
      return this.pad(ticks % 60);
  }
   pad(digit: any) {
      return digit <= 9 ? '0' + digit : digit;
  }

}
