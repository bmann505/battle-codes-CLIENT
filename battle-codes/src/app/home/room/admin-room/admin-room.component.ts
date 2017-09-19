import { Component, OnInit, Input } from '@angular/core';
import { roomService } from 'app/room.service'


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
  @Input() startTimer: () => void;
  constructor(private roomService: roomService) { }

  ngOnInit() {
  }

  onSelectQuestion() {
    this.selectQuestion = true;
    this.buttonSelectQuestion = true;
    this.grade = true;
    this.postedQuestion = false;
  }

  onSubmitQuestion( question) {
    this.postedQuestion = true;
    this.selectQuestion = false;
    this.buttonSelectQuestion = true;
    this.grade = false;
    this.timer = true;
    this.roomService.emitQuestions(question);
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
