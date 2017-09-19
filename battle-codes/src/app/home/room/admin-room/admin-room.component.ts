import { Component, OnInit } from '@angular/core';
import { timerService } from 'app/home/room/timer/timer.service';
@Component({
  selector: 'app-admin-room',
  templateUrl: './admin-room.component.html',
  styleUrls: ['./admin-room.component.css']
})
export class AdminRoomComponent implements OnInit {
  selectQuestion = false;
  buttonSelectQuestion = false;
  grade = true;
  postedQuestion = false;
  timer = false;

  constructor(private timerService: timerService) { }

  ngOnInit() {
  }

  onSelectQuestion() {
    this.selectQuestion = true;
    this.buttonSelectQuestion = true;
    this.grade = true;
    this.postedQuestion = false;
  }

  onSubmitQuestion() {
    this.postedQuestion = true;
    this.selectQuestion = false;
    this.buttonSelectQuestion = true;
    this.grade = false;
    this.timer = true;
    this.timerService.startTimer();
  }

  onStartNewRound() {
    this.buttonSelectQuestion = false;
    this.grade = true;
    this.postedQuestion = false;
    this.timer = false;
  }

  onFinishGame() {
    console.log("test")
  }
}
