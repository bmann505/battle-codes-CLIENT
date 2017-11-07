import { Component, OnInit } from '@angular/core';
import { roomService } from 'app/room.service';
import { timerTrackService } from 'app/timerTrack.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-team-answer',
  templateUrl: './team-answer.component.html',
  styleUrls: ['./team-answer.component.css']
})

export class TeamAnswerComponent implements OnInit {
  socket=io('https://rocky-castle-86279.herokuapp.com/')
   ToggleButton
  constructor(private roomService: roomService, private timerTrackService: timerTrackService) { }

  ngOnInit() {
    this.roomService.submitTimer(this.socket, false)
    this.socket.on('timer', (data) => {
      if (data.timerFlag !=undefined) {
        this.ToggleButton = !data.timerFlag
      }
    })
  }

  emitAnswer(answer){
    let data = {
    room: this.roomService.room.name,
    handle: this.roomService.team.name,
    message:answer,
    question: "",
    score:0
  }
  
  this.socket.emit('room', data);

  }


}
