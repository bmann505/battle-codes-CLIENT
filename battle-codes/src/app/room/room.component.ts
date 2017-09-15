import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  selectQuestion = false;
  buttonSelectQuestion = false;
  grade = false;


  constructor() { }

  ngOnInit() {
  }

  onSelectQuestion() {
    this.selectQuestion = true;
    this.buttonSelectQuestion = true;
    this.grade = true;

  }

}
