import { Component, OnInit, Input } from '@angular/core';
import { roomService } from 'app/room.service';
import * as io from 'socket.io-client'
@Component({
  selector: 'app-grading',
  templateUrl: './grading.component.html',
  styleUrls: ['./grading.component.css']
})
export class GradingComponent implements OnInit {
    socket=io('https://rocky-castle-86279.herokuapp.com/')
@Input() onStartNewRound: () => void;

 teams=this.roomService.teams
  constructor(private roomService: roomService) { }

  ngOnInit() {
  this.roomService.resDataFromTeam(this.socket)
}
gradeUp(team){
team.score +=1
this.socket.emit('room', team);
}

}
