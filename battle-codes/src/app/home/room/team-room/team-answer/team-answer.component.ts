import { Component, OnInit } from '@angular/core';
import { roomService } from 'app/room.service';
import * as io from 'socket.io-client'
@Component({
  selector: 'app-team-answer',
  templateUrl: './team-answer.component.html',
  styleUrls: ['./team-answer.component.css']
})
export class TeamAnswerComponent implements OnInit {
  socket=io('http://localhost:3000')
  constructor(private roomService: roomService) { }

  ngOnInit() {
  }
 emitAnswer(answer){
   let data = {
   room: this.roomService.room.name,
   handle: this.roomService.team.name,
   message:answer,
   question: "",
   score:0
 }
 console.log(data);
 this.socket.emit('room', data);
 }
}
